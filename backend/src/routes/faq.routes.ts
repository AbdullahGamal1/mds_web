import { Router } from 'express';
import prisma from '../config/database';
import { authenticate, authorize } from '../middleware/auth.middleware';

const router = Router();

// Get all FAQs (public - only published)
router.get('/', async (req, res, next) => {
    try {
        const { category } = req.query;

        const where: any = { published: true };
        if (category) {
            where.category = category as string;
        }

        const faqs = await prisma.fAQ.findMany({
            where,
            orderBy: { order: 'asc' },
        });

        res.json({ faqs });
    } catch (error) {
        next(error);
    }
});

// Get all FAQs for admin
router.get('/admin/all', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const faqs = await prisma.fAQ.findMany({
            orderBy: { order: 'asc' },
        });

        res.json({ faqs });
    } catch (error) {
        next(error);
    }
});

// Create FAQ (admin only)
router.post('/', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const faq = await prisma.fAQ.create({
            data: req.body,
        });

        res.status(201).json({
            message: 'FAQ created successfully',
            faq,
        });
    } catch (error) {
        next(error);
    }
});

// Update FAQ (admin only)
router.put('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { id } = req.params;

        const faq = await prisma.fAQ.update({
            where: { id },
            data: req.body,
        });

        res.json({
            message: 'FAQ updated successfully',
            faq,
        });
    } catch (error) {
        next(error);
    }
});

// Delete FAQ (admin only)
router.delete('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { id } = req.params;

        await prisma.fAQ.delete({
            where: { id },
        });

        res.json({ message: 'FAQ deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;
