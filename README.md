# Parkarattorney2

Build this website

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://parkarattorney2.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/27786a79-4f40-4847-870e-a4e10ee6776e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy to Netlify

Connect this repository to Netlify. The included `netlify.toml` configures the
build command and Nitro output directory; SSR routes and server functions are
deployed with the site.

In the Netlify site environment variables, configure:

- `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` for the browser build.
- `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` for server-side requests.

Make the `VITE_` variables available during builds and the server variables
available to functions. Use the same values as the corresponding local
environment variables.
