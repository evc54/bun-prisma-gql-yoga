import 'reflect-metadata';
import app from './elysia';
import {
  GRAPHQL_PATH,
  PORT,
} from './consts';

app.listen(PORT, () => {
  const host = `http://${app.server?.hostname}:${PORT}${GRAPHQL_PATH}`;
  console.info(`GraphQL is running on ${host}`);
});
