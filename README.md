# DevOps Frontend

## Purpose

This is a simple React application built for a DevOps learning project.
It connects to a backend REST API, displays the response, and shows the
application's version information.

## Tech Stack

- React
- Vite

## Deployment Status

### CI/CD Pipeline

This project uses GitHub Actions for continuous deployment. The workflow file
is located at `.github/workflows/deploy.yml` and performs the following steps
on every push to `main`:

1. Checks out the repository code
2. Sets up Node.js
3. Installs dependencies
4. Builds the application (`npm run build`)
5. Copies the contents of the `dist` folder to the server via SCP
6. Tests and reloads the Nginx configuration on the server

Secrets used by the workflow (configured in repository Settings → Secrets
and variables → Actions):

| Secret         | Description                    |
| -------------- | ------------------------------ |
| SERVER_HOST    | VPS IP address                 |
| SERVER_USER    | SSH username (franky)          |
| SERVER_SSH_KEY | Private SSH key for deployment |
| SERVER_PORT    | SSH port (22)                  |
| DEPLOY_PATH    | Target directory on the server |

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
