import { config as dotenv } from './libraries.ts'

export async function config(): Promise<Record<string, string>> {
  await dotenv({
    export: true,
    safe: true,
  })
  return Deno.env.toObject()
}
