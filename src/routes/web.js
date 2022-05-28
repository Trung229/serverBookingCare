import express from "express";
import HomeController from "../controllers/homeController"

let router = express.Router();

let initWebRoutes = async (app) =>{
    router.get('/',await HomeController.homeController)
    return app.use("/", router);
}

module.exports =initWebRoutes;