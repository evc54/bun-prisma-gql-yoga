export const extractAuthorization = (headers: Headers): string | undefined => {
  const authorization: string = headers.get('authorization') ?? '';

  if (!authorization) return;

  const [, jwt] = authorization.split(' ');

  return jwt;
};
