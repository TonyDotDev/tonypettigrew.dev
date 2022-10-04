# tonypettigrew.dev

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Bit.io](https://www.http://bit.io/)
- **ORM**: [Prisma](https://prisma.io/)
- **CMS**: [Sanity](https://www.sanity.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com)

## Project Structure

```sh
src
|
+-- components        # all app components
|
+-- config            # global configuration, such as clientUrl, etc
|
+-- hooks             # all app hooks, usually shared accross the application
|
+-- layouts           # layouts for [slug].ts pages
|
+-- lib               # pre-configured, exported libraries
|
+-- pages             # all views, routing is based on this directory
|
+-- prisma            # primsa migrations and config
|
+-- public            # public assets
|
+-- styles            # all app styles
|
+-- types             # global types
|
+-- utils             # utility modules
```

## Running Locally

This application was developed using Node v16.17.0

```bash
git clone https://github.com/TonyDotDev/tonypettigrew.dev.git
cd tonypettigrew.dev
yarn
yarn dev
```

Make sure to copy and paste the fields from the [.env.example](https://github.com/TonyDotDev/tonypettigrew.dev/blob/main/.env.example) file into a new .env file and fill in the field values with your own keys, secrets and tokens.
