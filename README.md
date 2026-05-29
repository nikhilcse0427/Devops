# Node.js Clean Architecture Boilerplate

A simple but robust Node.js application structure following clean architecture principles.

## Folder Structure

```text
src/
├── configs/        # Configuration files (Env, Database, API keys)
├── controllers/    # Layer that handles HTTP requests and sends responses
├── middlewares/    # Custom Express middlewares (Auth, Error handler, etc.)
├── models/         # Database models/schemas
├── routes/         # Definition of API routes
├── services/       # Core business logic
├── utils/          # Utility/Helper functions
├── app.js          # Express app initialization
└── server.js       # Entry point of the application
```

## Layers
1. **Routes**: Entry point for requests. Matches URL and method to controller.
2. **Controllers**: Extracts request data (body, params, query) and calls the appropriate service. Handles HTTP status codes.
3. **Services**: Contains logic. Decouples the business logic from the HTTP layer.
4. **Models**: Defines data structure (e.g., Mongoose schemas or Sequelize models).
5. **Middlewares**: Cross-cutting concerns like validation, authentication, and error handling.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run in development mode:
   ```bash
   npm run dev
   ```

3. Run in production:
   ```bash
   npm start
   ```

## Example API Routes
- `GET /api/v1/health`: Check server status.
- `GET /api/v1/users`: Fetch sample users.
- `POST /api/v1/users`: Create a sample user.

## CD on Render (GitHub Actions)

On every push to `main`, **CI/CD Pipeline** (`second_CI.yml`) runs tests then triggers a Render deploy via deploy hook.

**Actions not running?** GitHub only runs workflows when you **push a commit** to `main` on GitHub (not from local saves alone). After adding secrets, push again or use **Actions → CI/CD Pipeline → Run workflow**.

### One-time setup

1. **Render** — Web Service → Settings:
   - Build: `npm install` · Start: `npm start`
   - Health check: `/api/v1/health`
   - **Auto-Deploy: Off** (deploy only after CI passes)
   - Copy **Deploy Hook** URL

2. **GitHub** — Repo → Settings → Secrets and variables → Actions:
   - `RENDER_DEPLOY_HOOK_URL` = deploy hook URL from Render

3. **Optional** — Variables → Actions:
   - `RENDER_SERVICE_URL` = `https://your-app.onrender.com` (shows link on the production deployment)

4. **Optional Docker Hub** — only if you want image push (not required for Render):
   - `DOCKERHUB_USERNAME` = your Docker Hub username
   - `DOCKERHUB_PASSWORD` = a **Docker Hub Access Token** ([Account Settings → Security → New Access Token](https://hub.docker.com/settings/security)), **not** your account login password
   - If you do not use Docker Hub, **delete** those secrets so the job is skipped entirely

`first_CI` is manual-only (Actions → first_CI → Run workflow) so each push runs **one** workflow.
