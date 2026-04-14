import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../server';

describe('Auth API Validation', () => {
    it('should fail login with empty body', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({});
            
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Validation failed');
    });

    it('should fail login with invalid email format', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({ email: 'notanemail', password: 'pass' });
            
        expect(response.status).toBe(400);
        expect(response.body.errors[0]).toHaveProperty('message', 'Invalid email address');
    });

    it('should fail register if missing name', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({ email: 'test@mds.com', password: 'pass' });
            
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Validation failed');
    });
});
