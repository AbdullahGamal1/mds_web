import { Router } from 'express';
import prisma from '../config/database';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

const router = Router();

// Get all case studies (public)
router.get('/', async (req, res, next) => {
    try {
        const { featured, industry, limit } = req.query;

        const where: any = { published: true };

        if (featured === 'true') {
            where.featured = true;
        }

        if (industry) {
            where.industry = industry as string;
        }

        const take = limit ? parseInt(limit as string) : undefined;

        const caseStudies = await prisma.caseStudy.findMany({
            where,
            take,
            orderBy: { createdAt: 'desc' },
        });

        res.json({ caseStudies });
    } catch (error) {
        next(error);
    }
});

// Get single case study by slug (public)
router.get('/:slug', async (req, res, next) => {
    try {
        const { slug } = req.params;

        const caseStudy = await prisma.caseStudy.findUnique({
            where: { slug },
        });

        if (!caseStudy) {
            throw new AppError('Case study not found', 404);
        }

        res.json({ caseStudy });
    } catch (error) {
        next(error);
    }
});

// Get all (Admin)
router.get('/admin/all', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const caseStudies = await prisma.caseStudy.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json({ caseStudies });
    } catch (error) {
        next(error);
    }
});

// Create (Admin)
router.post('/', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const data = req.body;

        // Basic validation
        if (!data.title || !data.slug || !data.client) {
            throw new AppError('Missing required fields', 400);
        }

        const caseStudy = await prisma.caseStudy.create({
            data,
        });

        res.status(201).json({
            message: 'Case study created successfully',
            caseStudy,
        });
    } catch (error) {
        next(error);
    }
});

// Update (Admin)
router.put('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const caseStudy = await prisma.caseStudy.update({
            where: { id },
            data,
        });

        res.json({
            message: 'Case study updated successfully',
            caseStudy,
        });
    } catch (error) {
        next(error);
    }
});

// Delete (Admin)
router.delete('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { id } = req.params;
        await prisma.caseStudy.delete({ where: { id } });
        res.json({ message: 'Case study deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;
