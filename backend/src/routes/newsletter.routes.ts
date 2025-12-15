import { Router } from 'express';
import prisma from '../config/database';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

const router = Router();

// Subscribe to newsletter (public)
router.post('/subscribe', async (req, res, next) => {
    try {
        const { email, name } = req.body;

        if (!email) {
            throw new AppError('Email is required', 400);
        }

        const existingSubscriber = await prisma.newsletter.findUnique({
            where: { email },
        });

        if (existingSubscriber) {
            if (!existingSubscriber.active) {
                // Reactivate subscription
                const updated = await prisma.newsletter.update({
                    where: { email },
                    data: { active: true, unsubscribedAt: null },
                });
                return res.json({ message: 'Welcome back! Subscription reactivated.', subscriber: updated });
            }
            return res.status(400).json({ message: 'Email already subscribed' });
        }

        const subscriber = await prisma.newsletter.create({
            data: {
                email,
                name,
            },
        });

        res.status(201).json({
            message: 'Successfully subscribed to newsletter',
            subscriber,
        });
    } catch (error) {
        next(error);
    }
});

// Get all subscribers (admin only)
router.get('/', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { page = '1', limit = '50' } = req.query;

        const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
        const take = parseInt(limit as string);

        const [subscribers, total] = await Promise.all([
            prisma.newsletter.findMany({
                skip,
                take,
                orderBy: { subscribedAt: 'desc' },
            }),
            prisma.newsletter.count(),
        ]);

        res.json({
            subscribers,
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

// Unsubscribe/Delete (admin only)
router.delete('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { id } = req.params;

        await prisma.newsletter.delete({
            where: { id },
        });

        res.json({ message: 'Subscriber deleted' });
    } catch (error) {
        next(error);
    }
});

export default router;
