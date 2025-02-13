// Task 1: getServerURL()
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export function getServerURL() {
  return "http://localhost:3000";
}
