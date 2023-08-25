# Bun, Prisma, Elysia, GraphQL Yoga and Type-GraphQL example

To install Bun:

```bash
curl -fsSL https://bun.sh/install | bash
```

To install dependencies:

```bash
bun install
```

Create env file:

```bash
cp env.template .env
```

Adjust it if you need.

Migrate a database:

```bash
bunx prisma migrate dev
```

## Backend

To run:

```bash
cd backend
bun run serve
```

With hot reloading:

```bash
cd backend
bun run serve:watch
```

## Frontend

To run in dev mode:

```bash
cd frontend
bun run dev
```

## API

Example application exposes one query and two mutations.

You can sign up, sign in and query a list of users.

User's list is protected from unauthorized access.

## Using API

Use Postman collection in the docs folder to test the API.
