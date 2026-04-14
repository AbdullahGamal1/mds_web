import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import { config } from './config/env';
import { errorHandler, notFound } from './middleware/error.middleware';
import logger from './utils/logger';

// Import routes
import authRoutes from './routes/auth.routes';
import blogRoutes from './routes/blog.routes';
import testimonialRoutes from './routes/testimonials.routes';
import contactRoutes from './routes/contact.routes';
import faqRoutes from './routes/faq.routes';
import newsletterRoutes from './routes/newsletter.routes';
import caseStudyRoutes from './routes/casestudy.routes';
import serviceRoutes from './routes/services.routes';

const app = express();

// Rate Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Middleware
app.use(helmet());
app.use(cors({
    origin: config.cors.origin,
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: { write: (message: string) => logger.info(message.trim()) } }));
app.use(limiter);

// Static files for uploads
app.use('/uploads', express.static(config.upload.dir));

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

import { setupSwagger } from './config/swagger';

// API Routes
setupSwagger(app);
app.use('/api/auth', authRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/casestudy', caseStudyRoutes);
app.use('/api/services', serviceRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
if (process.env.NODE_ENV !== 'test') {
    const PORT = config.port;
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
        console.log(`📝 Environment: ${config.nodeEnv}`);
        console.log(`🌐 CORS enabled for: ${config.cors.origin.join(', ')}`);
    });
}

export default app;
