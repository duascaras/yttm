# YTTM

## Getting Started

To run the development server:

```bash
pnpm dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Packages installed

-   clsx
-   tailwind-merge
-   tailwind-animate
-   @tailwind/typography
-   lucide-react
-   shadcn-ui@latest add button (this on with npx)
-   @kinde-oss/kinde-auth-nextjs
-   @trpc/server @trpc/client @trpc/client @trpc/react-query @trpc/next @tanstack/react-query zod
-   npx prisma init
-   npx shadcn@latest add dialog
-   pnpm install react-loading-skeleton
-   pnpm install date-fns

## Resources

-   https://ui.shadcn.com/

## Topics mentioned

-   Eventual consistency
    -   Josh used this concept explaining the interaction between the user, dashboard and database

![alt text](docs/eventual_consistency.png)

-   tRPC (Typesafe APIs)

![alt text](docs/tRPC.png)

## Important stuff

```bash
# this opens a web page to check our database
npx prisma studio
# push changes into database
npx prisma db push
# generate the local typescript files
npx prisma generate
```
