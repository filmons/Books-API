import express from "express";
import middleWares from "./src/config/middleWares.js";
import Server from "./src/config/server.js";
import config from "./src/config/env.js";
import routes from "./src/modules/index.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import db from './src/config/database';

const http = express();



const api =  new Server(http, middleWares, routes);

(async () => {
    try {
        await db.associateAll(db.sequelize.models)
        await db.sequelize.sync({alter: true})
        await api.start(config.app_port);
    } catch (e) {
        console.error(e);
    }
})();