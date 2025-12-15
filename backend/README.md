# MDS Backend & Admin Dashboard

## Quick Start Guide

### 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend (if not already installed)
cd ..
npm install axios
```

### 2. Setup MySQL Database

Create a MySQL database named `mds_db`:

```sql
CREATE DATABASE mds_db;
```

Update the `.env` file in the `backend` folder with your MySQL credentials:

```env
DATABASE_URL="mysql://root:YOUR_PASSWORD@localhost:3306/mds_db"
```

### 3. Run Database Migrations

```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Create First Admin User

```bash
# Start the backend server
npm run dev
```

Then use an API client (Postman/Thunder Client) or curl to create an admin user:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@mds.com",
    "password": "admin123",
    "name": "Admin User"
  }'
```

### 5. Start the Servers

**Backend (Terminal 1):**
```bash
cd backend
npm run dev
```

**Frontend (Terminal 2):**
```bash
npm run dev
```

### 6. Access the Admin Dashboard

1. Open browser: `http://localhost:5173/admin/login`
2. Login with:
   - Email: `admin@mds.com`
   - Password: `admin123`

## Admin Dashboard Features

✅ **Dashboard Overview** - Statistics and quick insights
✅ **Blog Manager** - Create, edit, publish/unpublish, delete blog posts
✅ **Contact Submissions** - View and manage contact form submissions
✅ **Status Management** - Track submission status (New, In Progress, Resolved)
✅ **Authentication** - Secure JWT-based login system
✅ **Protected Routes** - Admin-only access to dashboard

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register admin user
- `POST /api/auth/login` - Login
- `POST /api/auth/refresh` - Refresh token
- `GET /api/auth/me` - Get current user

### Blog
- `GET /api/blog` - Get all posts (public)
- `GET /api/blog/:slug` - Get single post
- `POST /api/blog` - Create post (admin)
- `PUT /api/blog/:id` - Update post (admin)
- `DELETE /api/blog/:id` - Delete post (admin)

### Testimonials
- `GET /api/testimonials` - Get published testimonials
- `GET /api/testimonials/admin/all` - Get all (admin)
- `POST /api/testimonials` - Create (admin)
- `PUT /api/testimonials/:id` - Update (admin)
- `DELETE /api/testimonials/:id` - Delete (admin)

### Contact
- `POST /api/contact` - Submit contact form (public)
- `GET /api/contact` - Get all submissions (admin)
- `PATCH /api/contact/:id` - Update status (admin)
- `DELETE /api/contact/:id` - Delete (admin)

### FAQ
- `GET /api/faq` - Get published FAQs
- `GET /api/faq/admin/all` - Get all (admin)
- `POST /api/faq` - Create (admin)
- `PUT /api/faq/:id` - Update (admin)
- `DELETE /api/faq/:id` - Delete (admin)

## Database Schema

The system includes the following tables:
- `users` - Admin users
- `blog_posts` - Blog articles
- `testimonials` - Customer testimonials
- `contact_submissions` - Contact form entries
- `newsletter_subscribers` - Email subscribers
- `faqs` - Frequently asked questions
- `case_studies` - Client success stories
- `services` - Services offered
- `media` - Uploaded files
- `activity_logs` - Admin activity tracking

## Security Features

- JWT authentication with refresh tokens
- Password hashing with bcrypt
- Protected admin routes
- CORS configuration
- Input validation
- SQL injection prevention (Prisma ORM)

## Next Steps

1. ✅ Backend API created
2. ✅ Database schema designed
3. ✅ Admin dashboard built
4. ⏳ Add more admin pages (Testimonials, FAQ, Case Studies)
5. ⏳ Implement rich text editor for blog posts
6. ⏳ Add image upload functionality
7. ⏳ Connect frontend pages to backend API
