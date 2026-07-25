# Netlify Deployment Checklist

1. Create the Supabase project.
2. Create the public `website-media` Storage bucket.
3. Obtain the Supabase pooled database URL.
4. Push this project to GitHub.
5. Import the repository into Netlify.
6. Add all environment variables from `.env.example`.
7. Set `NEXTAUTH_URL` to the final Netlify URL.
8. Confirm `DATABASE_URL` contains the real Supabase region, project reference, password, and pooled database host.
9. From a trusted local environment, run `npm run db:push` and then `npm run db:seed` once to initialize the database.
10. Deploy the site.
11. Open `/login`.
12. Sign in using the configured admin credentials.
13. Immediately confirm the password is not `admin`.
14. Replace contact placeholders and upload real company media.
