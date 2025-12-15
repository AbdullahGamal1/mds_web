import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/env';
import { errorHandler, notFound } from './middleware/error.middleware';

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

// Middleware
app.use(helmet());
app.use(cors({
    origin: config.cors.origin,
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files for uploads
app.use('/uploads', express.static(config.upload.dir));

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
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
const PORT = config.port;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📝 Environment: ${config.nodeEnv}`);
    console.log(`🌐 CORS enabled for: ${config.cors.origin.join(', ')}`);
});

export default app;
