import jsonserver from "json-server"

export function jsonServer() {
  const server = jsonserver.create()
  const router = jsonserver.router('./db.json')
  const middlewares = jsonserver.defaults()

  server.use(middlewares)
  server.use(router)
  server.listen(3000, () => {
    console.log('JSON Server is running')
  })
}

