import { scrypt } from 'node:crypto';

export const passwordEncrypt = async (password: string, salt: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    scrypt(password, salt, 32, (err, res) => {
      if (err) return reject(err);
      resolve(res.toString('hex'));
    });
  });
};
