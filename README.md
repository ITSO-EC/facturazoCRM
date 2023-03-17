Avantage seeks to accelerate building fullstack node applications with Nuxt 3. 

Features:
- Auth (Can now send OTP via nuxt-mailer)
- Tailwind CSS
- Stripe Checkout Integration
- Prisma Js (database ORM)
- Nuxt-Mailer (node mailer integration)
- what feature do you think belong? open a discussion

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Database Init

Generate models from Prisma Schema
Dont forget to setup your .env file

```bash
npx prisma generate
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.


