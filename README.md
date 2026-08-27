# DevOps Frontend

## Purpose

This is a simple React application built for a DevOps learning project.
It connects to a backend REST API, displays the response, and shows the
application's version information.

## Tech Stack

- React
- Vite

## Running Locally

1. Clone the repository:

```bash
   git clone hhttps://github.com/NeslihanCanbaz/devops-frontend
   cd devops-frontend
```

2. Install dependencies:

```bash
   npm install
```

3. Start the development server:

```bash
   npm run dev
```

4. Visit `http://localhost:5173` in your browser.

Note: Make sure the backend application is also running locally on port 3000
for the "Backend Bilgisini Getir" button to work.

## Building for Production

```bash
npm run build
```

This creates a `dist` folder with the production-ready static files.

## Deployment

This application is deployed to a Ubuntu VPS. On every push to the `main`
branch, a GitHub Actions workflow automatically:

1. Checks out the code
2. Installs dependencies
3. Builds the application
4. Copies the build output to the server
5. Reloads Nginx

The built static files are served directly by Nginx.

## Environment Variables

This application does not currently require any environment variables.

## Live URL

- F- Frontend: `https://nesli-frontend.team-vit-devops.nl`
