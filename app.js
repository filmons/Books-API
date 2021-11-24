
import express from "express";
import middleWares from "./src/config/middleWares.js";
import Server from "./src/config/server.js";
import env from "./src/config/env.js";
import routes from "./src/modules/index.js";
import errorHandler from "./src/middlewares/errorHandler.js";

const http = express();
const server = new Server(http);

server.middlewares(middleWares);
server.routres(routes);
server.errorHandler(errorHandler);

server.start(env.app_port);