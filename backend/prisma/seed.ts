import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seeding...');

    // 1. Create Admin User
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@mds.com' },
        update: { password: hashedPassword },
        create: {
            email: 'admin@mds.com',
            password: hashedPassword,
            name: 'MDS Admin',
            role: 'ADMIN',
        },
    });
    console.log(`✅ Admin created: ${admin.email} (Password: admin123)`);

    // 2. Create sample Contact Submissions
    await prisma.contactSubmission.createMany({
        data: [
            {
                name: 'Ahmed Youssef',
                email: 'ahmed@example.com',
                company: 'Tech Solutions',
                phone: '+201000000000',
                message: 'We are interested in implementing Zoho CRM for our sales team.',
                status: 'NEW',
            },
            {
                name: 'Sara Ali',
                email: 'sara@startup.io',
                company: 'Startup LLC',
                message: 'Need consultation regarding Zoho Books and integration with our current store.',
                status: 'IN_PROGRESS',
            },
        ],
    });
    console.log(`✅ Contact Submissions seeded`);

    // 3. Create Sample Services
    await prisma.service.upsert({
        where: { slug: 'zoho-crm' },
        update: {},
        create: {
            name: 'Zoho CRM Implementation',
            nameAr: 'إعداد وتجهيز زوهو CRM',
            slug: 'zoho-crm',
            description: 'End-to-end setup and customization of Zoho CRM for your business processes.',
            descriptionAr: 'إعداد وتخصيص نظام زوهو CRM لدعم وتسريع عمليات المبيعات في شركتك.',
            features: '["Custom Modules", "Workflow Automation", "3rd-party Integration"]',
            published: true,
        },
    });
    console.log(`✅ Services seeded`);

    console.log('🎉 Seeding finished successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
