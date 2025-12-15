import { Router } from 'express';
import prisma from '../config/database';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

const router = Router();

// Get all services (public)
router.get('/', async (req, res, next) => {
    try {
        const services = await prisma.service.findMany({
            where: { published: true },
            orderBy: { order: 'asc' },
        });
        res.json({ services });
    } catch (error) {
        next(error);
    }
});

// Admin Routes

// Get all (Admin)
router.get('/admin/all', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const services = await prisma.service.findMany({
            orderBy: { order: 'asc' },
        });
        res.json({ services });
    } catch (error) {
        next(error);
    }
});

// Create
router.post('/', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const data = req.body;
        // Basic validation
        if (!data.name || !data.slug || !data.description) {
            throw new AppError('Missing required fields', 400);
        }

        const service = await prisma.service.create({
            data,
        });

        res.status(201).json({ message: 'Service created successfully', service });
    } catch (error) {
        next(error);
    }
});

// Update
router.put('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const service = await prisma.service.update({
            where: { id },
            data,
        });

        res.json({ message: 'Service updated successfully', service });
    } catch (error) {
        next(error);
    }
});

// Delete
router.delete('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), async (req, res, next) => {
    try {
        const { id } = req.params;
        await prisma.service.delete({ where: { id } });
        res.json({ message: 'Service deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;
