import { Router } from 'express';
import prisma from '../config/database';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';
import { validateRequest } from '../middleware/validateRequest';
import { createContactSchema, updateContactStatusSchema } from '../schemas/contact.schema';

const router = Router();

// Submit contact form (public)
router.post('/', validateRequest(createContactSchema), async (req, res, next) => {
    try {
        const { name, email, phone, company, message } = req.body;

        const submission = await prisma.contactSubmission.create({
            data: {
                name,
                email,
                phone,
                company,
                message,
            },
        });

        res.status(201).json({
            message: 'Your message has been sent successfully',
            submission: {
                id: submission.id,
                createdAt: submission.createdAt,
            },
        });
    } catch (error) {
        next(error);
    }
});

// Get all contact submissions (admin only)
router.get('/', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { status, page = '1', limit = '20' } = req.query;

        const where: any = {};
        if (status) {
            where.status = status;
        }

        const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
        const take = parseInt(limit as string);

        const [submissions, total] = await Promise.all([
            prisma.contactSubmission.findMany({
                where,
                skip,
                take,
                orderBy: { createdAt: 'desc' },
            }),
            prisma.contactSubmission.count({ where }),
        ]);

        res.json({
            submissions,
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

// Update submission status (admin only)
router.patch('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), validateRequest(updateContactStatusSchema), async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status, notes } = req.body;

        const submission = await prisma.contactSubmission.update({
            where: { id },
            data: { status, notes },
        });

        res.json({
            message: 'Submission updated successfully',
            submission,
        });
    } catch (error) {
        next(error);
    }
});

// Delete submission (admin only)
router.delete('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { id } = req.params;

        await prisma.contactSubmission.delete({
            where: { id },
        });

        res.json({ message: 'Submission deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;
