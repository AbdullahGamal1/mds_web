import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../server';

describe('Contact API Validation & Rate Limits', () => {
    it('should fail to submit contact form with missing fields', async () => {
        const response = await request(app)
            .post('/api/contact')
            .send({ name: 'JD' }); // missing email and message
            
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Validation failed');
        // Zod issue path checks
        const errorPaths = response.body.errors.map((e: any) => e.path.join('.'));
        expect(errorPaths).toContain('body.email');
        expect(errorPaths).toContain('body.message');
    });

    it('should fail to submit contact form if message is too short', async () => {
        const response = await request(app)
            .post('/api/contact')
            .send({ name: 'John', email: 'john@mds.com', message: 'Hi' });
            
        expect(response.status).toBe(400);
        expect(response.body.errors).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ message: 'Message must be at least 10 characters' })
            ])
        );
    });
});
