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

To run:

```bash
bun run index.ts
```

## API

Example application exposes one query and two mutations.

You can sign up, sign in and query a list of users.

User's list is protected from unauthorized access.

## Using API

Use Postman collection in the docs folder to test the API.
