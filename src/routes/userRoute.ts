import express from "express";
import { UserService } from "../services/userService";

export class UserRoute {

    public router = express.Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/user/:email", this.getUser);
        this.router.post("/user", this.createUser);
        this.router.delete("/user/:email", this.removeUser);
        this.router.put("/user/:email", this.updateUser);
        this.router.delete("/user/:email/whatsapp", this.removeWhatsapp);
        this.router.delete("/user/:email/phone", this.removePhone);
    }

    public getUser(res: express.Response, req: express.Request) {
        const userService = new UserService();
        userService.getUser(req.body).then((user) => {
            res.json(user);
        });
    }

    public createUser(res: express.Response, req: express.Request) {
        const userService = new UserService();
        userService.createUser(req.body).then((user) => {
            res.json(user);
        });
    }

    public removeUser(res: express.Response, req: express.Request) {
        const userService = new UserService();
        userService.removeUser(req.body).then((user) => {
            res.json(user);
        });
    }

    public updateUser(res: express.Response, req: express.Request) {
        const userService = new UserService();
        userService.updateUser(req.body).then((user) => {
            res.json(user);
        });
    }

    public removeWhatsapp(res: express.Response, req: express.Request) {
        const userService = new UserService();
        userService.removeWhatsapp(req.body).then((user) => {
            res.json(user);
        });
    }

    public removePhone(res: express.Response, req: express.Request) {
        const userService = new UserService();
        userService.removePhone(req.body).then((user) => {
            res.json(user);
        });
    }
}