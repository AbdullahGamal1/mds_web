import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../server';

describe('Health Check API', () => {
    it('should return status ok and timestamp on GET /health', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('status', 'ok');
        expect(response.body).toHaveProperty('timestamp');
    });
});
