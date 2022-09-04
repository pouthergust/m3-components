import { json } from 'co-body'

export async function bodyParser(ctx: Context, next: () => Promise<any>) {
  ctx.req = await json(ctx.req)
  await next()
}
