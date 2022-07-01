import { Client, config } from './libraries.ts';

const db = new Client();

export function connect(): Promise<Client> {
  return db.connect({
    hostname: config.HOSTNAME,
    username: config.USERNAME,
    password: config.PASSWORD,
    db: config.DATABASE,
  });
}
