import { randomBytes } from 'node:crypto';
import { passwordEncrypt } from './password_encrypt';

export const passwordHash = async (password: string, saltLength = 8): Promise<string> => {
  const salt = randomBytes(saltLength).toString('hex');
  const hash = await passwordEncrypt(password, salt);

  return `${salt}#${hash}`;
};
