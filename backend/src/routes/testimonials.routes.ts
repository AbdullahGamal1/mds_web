import { Router } from 'express';
import prisma from '../config/database';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

const router = Router();

// Get all testimonials (public - only published)
router.get('/', async (req, res, next) => {
    try {
        const { featured } = req.query;

        const where: any = { published: true };

        if (featured === 'true') {
            where.featured = true;
        }

        const testimonials = await prisma.testimonial.findMany({
            where,
            orderBy: [
                { featured: 'desc' },
                { createdAt: 'desc' },
            ],
        });

        res.json({ testimonials });
    } catch (error) {
        next(error);
    }
});

// Get all testimonials for admin (includes unpublished)
router.get('/admin/all', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const testimonials = await prisma.testimonial.findMany({
            orderBy: { createdAt: 'desc' },
        });

        res.json({ testimonials });
    } catch (error) {
        next(error);
    }
});

// Create testimonial (admin only)
router.post('/', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const data = req.body;

        const testimonial = await prisma.testimonial.create({
            data,
        });

        res.status(201).json({
            message: 'Testimonial created successfully',
            testimonial,
        });
    } catch (error) {
        next(error);
    }
});

// Update testimonial (admin only)
router.put('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const testimonial = await prisma.testimonial.update({
            where: { id },
            data,
        });

        res.json({
            message: 'Testimonial updated successfully',
            testimonial,
        });
    } catch (error) {
        next(error);
    }
});

// Delete testimonial (admin only)
router.delete('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { id } = req.params;

        await prisma.testimonial.delete({
            where: { id },
        });

        res.json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;
