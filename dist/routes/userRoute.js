"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const userService_1 = require("../services/userService");
class UserRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/user/:email", this.getUser);
        this.router.post("/user", this.createUser);
        this.router.delete("/user/:email", this.removeUser);
        this.router.put("/user/:email", this.updateUser);
        this.router.delete("/user/:email/whatsapp", this.removeWhatsapp);
        this.router.delete("/user/:email/phone", this.removePhone);
    }
    getUser(res, req) {
        const userService = new userService_1.UserService();
        userService.getUser(req.body).then((user) => {
            res.json(user);
        });
    }
    createUser(res, req) {
        const userService = new userService_1.UserService();
        userService.createUser(req.body).then((user) => {
            res.json(user);
        });
    }
    removeUser(res, req) {
        const userService = new userService_1.UserService();
        userService.removeUser(req.body).then((user) => {
            res.json(user);
        });
    }
    updateUser(res, req) {
        const userService = new userService_1.UserService();
        userService.updateUser(req.body).then((user) => {
            res.json(user);
        });
    }
    removeWhatsapp(res, req) {
        const userService = new userService_1.UserService();
        userService.removeWhatsapp(req.body).then((user) => {
            res.json(user);
        });
    }
    removePhone(res, req) {
        const userService = new userService_1.UserService();
        userService.removePhone(req.body).then((user) => {
            res.json(user);
        });
    }
}
exports.UserRoute = UserRoute;
