import { Router } from 'express';
import prisma from '../config/database';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

const router = Router();

// Get all blog posts (public)
router.get('/', async (req, res, next) => {
    try {
        const { published, category, search, page = '1', limit = '10' } = req.query;

        const where: any = {};

        if (published === 'true') {
            where.published = true;
        }

        if (category) {
            where.category = category as string;
        }

        if (search) {
            where.OR = [
                { title: { contains: search as string } },
                { titleAr: { contains: search as string } },
                { excerpt: { contains: search as string } },
            ];
        }

        const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
        const take = parseInt(limit as string);

        const [posts, total] = await Promise.all([
            prisma.blogPost.findMany({
                where,
                skip,
                take,
                orderBy: { createdAt: 'desc' },
            }),
            prisma.blogPost.count({ where }),
        ]);

        res.json({
            posts,
            pagination: {
                total,
                page: parseInt(page as string),
                limit: parseInt(limit as string),
                totalPages: Math.ceil(total / parseInt(limit as string)),
            },
        });
    } catch (error) {
        next(error);
    }
});

// Get single blog post by slug (public)
router.get('/:slug', async (req, res, next) => {
    try {
        const { slug } = req.params;

        const post = await prisma.blogPost.findUnique({
            where: { slug },
        });

        if (!post) {
            throw new AppError('Blog post not found', 404);
        }

        // Increment views
        await prisma.blogPost.update({
            where: { slug },
            data: { views: { increment: 1 } },
        });

        res.json({ post });
    } catch (error) {
        next(error);
    }
});

// Create blog post (admin only)
router.post('/', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const data = req.body;

        if (!data.title || !data.slug) {
            throw new AppError('Title and slug are required', 400);
        }

        const post = await prisma.blogPost.create({
            data: {
                ...data,
                tags: JSON.stringify(data.tags || []),
            },
        });

        res.status(201).json({
            message: 'Blog post created successfully',
            post,
        });
    } catch (error) {
        next(error);
    }
});

// Update blog post (admin only)
router.put('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const post = await prisma.blogPost.update({
            where: { id },
            data: {
                ...data,
                tags: data.tags ? JSON.stringify(data.tags) : undefined,
            },
        });

        res.json({
            message: 'Blog post updated successfully',
            post,
        });
    } catch (error) {
        next(error);
    }
});

// Delete blog post (admin only)
router.delete('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { id } = req.params;

        await prisma.blogPost.delete({
            where: { id },
        });

        res.json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;
