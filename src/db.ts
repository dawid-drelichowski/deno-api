import { Client } from './libraries.ts';
import { config } from './config.ts';

const client = new Client();
const {
  HOSTNAME: hostname,
  USERNAME: username,
  PASSWORD: password,
  DATABASE: db,
} = await config()

export function connect(): Promise<Client> {
  return client.connect({
    hostname,
    username,
    password,
    db,
  });
}
