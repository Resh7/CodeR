# MOHANA SRI CNC TECHNICS

Premium enterprise website and lightweight CMS configured for direct deployment to Netlify.

## Hosting architecture

This project avoids local-only storage:

- Netlify hosts the Next.js website and serverless API routes
- Supabase PostgreSQL stores users, roles, permissions and CMS content
- Supabase Storage stores images, videos, brochures, certificates and documents
- NextAuth provides protected administrator sessions
- Prisma manages the hosted PostgreSQL schema
- The first administrator is created automatically during the Netlify build

## Deploy directly to Netlify

### 1. Create a free Supabase project

Create a project at Supabase and copy:

- Pooled PostgreSQL connection string
- Project URL
- Anonymous public key
- Service role key

Create a public Storage bucket named:

```text
website-media
```

The service role key must only be stored as a private Netlify environment variable.

### 2. Upload this project to GitHub

Extract the ZIP, create a GitHub repository and upload the project files.

### 3. Import into Netlify

In Netlify:

1. Choose **Add new site**
2. Choose **Import an existing project**
3. Connect GitHub
4. Select this repository
5. Netlify reads `netlify.toml` automatically

Do not change the build command or publish directory.

### 4. Add Netlify environment variables

In **Site configuration → Environment variables**, add:

```text
DATABASE_URL
NEXTAUTH_URL
NEXTAUTH_SECRET
ADMIN_USERNAME
ADMIN_PASSWORD
ADMIN_EMAIL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
SUPABASE_STORAGE_BUCKET
```

Use:

```text
NEXTAUTH_URL=https://YOUR-SITE-NAME.netlify.app
SUPABASE_STORAGE_BUCKET=website-media
```

Generate a secure `NEXTAUTH_SECRET`. Do not use the example secret.

### 5. Deploy

Trigger the first deployment.

The Netlify build automatically runs:

```text
prisma generate
prisma db push
prisma seed
next build
```

The database tables, permissions, default services and administrator account are created automatically.

## Administrator access

Open:

```text
https://YOUR-SITE-NAME.netlify.app/login
```

Use the values entered for:

```text
ADMIN_USERNAME
ADMIN_PASSWORD
```

## Included

- Premium animated responsive corporate website
- Netlify-ready Next.js deployment
- Hosted PostgreSQL database support
- Hosted media-storage upload API
- Credentials login with password hashing
- Protected admin routes
- Role and permission database architecture
- Services CMS API
- Media library database and upload foundation
- SEO metadata, structured data, sitemap and robots
- Accessible navigation and reduced-motion support

## Production recommendations

- Use a custom domain
- Replace the temporary contact phone number
- Add real company email and WhatsApp number
- Upload original company, workshop and project photography
- Configure Supabase backups and storage policies
- Connect analytics
- Change the administrator password regularly
