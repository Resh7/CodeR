# Netlify Deployment Checklist

1. Create the Supabase project.
2. Create the public `website-media` Storage bucket.
3. Obtain the Supabase pooled database URL.
4. Push this project to GitHub.
5. Import the repository into Netlify.
6. Add all environment variables from `.env.example`.
7. Set `NEXTAUTH_URL` to the final Netlify URL.
8. Deploy the site.
9. Open `/login`.
10. Sign in using the configured admin credentials.
11. Immediately confirm the password is not `admin`.
12. Replace contact placeholders and upload real company media.
