import { passwordEncrypt } from './password_encrypt';

export const passwordMatch = async (hash: string, password: string): Promise<boolean> => {
  const [salt] = hash.split('#');
  const passwordHash = await passwordEncrypt(password, salt);

  return hash === `${salt}#${passwordHash}`;
};
