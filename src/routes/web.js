import express from "express";
import HomeController from "../controllers/homeController"

let router = express.Router();

let initWebRoutes = (app) =>{
    router.get('/', HomeController.homeController)
    return app.use("/", router);
}

module.exports =initWebRoutes;