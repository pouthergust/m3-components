export async function listSellers(
  ctx: Context,
  next: () => Promise<any>
) {
  const {
    clients: { sellers },
  } = ctx
  try {
    const nl = await sellers.list();

    ctx.body = nl
    ctx.status = 201

    await next()
  } catch (error) {
    console.log('Erro ao obter a lista de sellers', error.message)
    ctx.status = 500
  }
}
