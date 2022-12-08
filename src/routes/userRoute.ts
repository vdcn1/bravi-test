import express from "express";
import { ResponseDTO } from "../common/constants";
import { UserService } from "../services/userService";

export class UserRoute {

    public router = express.Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/user/:email", this.getUser);
        this.router.post("/user", this.createUser);
        this.router.delete("/user", this.removeUser);
        this.router.put("/user", this.updateUser);
        this.router.delete("/user/:email/whatsapp", this.removeWhatsapp);
        this.router.delete("/user/:email/phone", this.removePhone);
    }

    public getUser(req: express.Request, res: express.Response) {
        const userService = new UserService();
        userService.getUser(req.params.email).then((user) => {
            res.json(new ResponseDTO("User fetched", null, user));
        }).catch((error) => {
            res.json(new ResponseDTO("User fetch failed", error.message, null));
        });
    }

    public createUser(req: express.Request,res: express.Response) {
        const userService = new UserService();
        userService.createUser(req.body).then(() => {
            res.json(new ResponseDTO("User created", null, null));
        }).catch((error) => {
            res.json(new ResponseDTO("User creation failed", error.message, null));
        });
    }

    public removeUser(req: express.Request,res: express.Response) {
        const userService = new UserService();
        userService.removeUser(req.body).then(() => {
            res.json(new ResponseDTO("User removed", null, null));
        }).catch((error) => {
            res.json(new ResponseDTO("User removal failed", error.message, null));
        });;
    }

    public updateUser(req: express.Request,res: express.Response) {
        const userService = new UserService();
        userService.updateUser(req.body).then(() => {
            res.json(new ResponseDTO("User updated", null, null));
        }).catch((error) => {
            res.json(new ResponseDTO("User update failed", error.message, null));
        });;
    }

    public removeWhatsapp(req: express.Request,res: express.Response) {
        const userService = new UserService();
        userService.removeWhatsapp(req.body).then((user) => {
            res.json(new ResponseDTO("Removed whatsapp", null, null));
        }).catch((error) => {
            res.json(new ResponseDTO("Whatsapp removal failed", error.message, null));
        });
    }

    public removePhone(req: express.Request,res: express.Response) {
        const userService = new UserService();
        userService.removePhone(req.body).then((user) => {
            res.json(new ResponseDTO("Phone removed", null, null));
        }).catch((error) => {
            res.json(new ResponseDTO("Phone removal failed", error.message, null));
        });
    }
}