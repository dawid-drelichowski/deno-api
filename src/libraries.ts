export { Application, Router } from 'https://deno.land/x/oak@v10.6.0/mod.ts';
export { Client } from 'https://deno.land/x/mysql@v2.10.2/mod.ts';
import { config as dotenv } from 'https://deno.land/std@0.144.0/dotenv/mod.ts';

export const config = await dotenv();
