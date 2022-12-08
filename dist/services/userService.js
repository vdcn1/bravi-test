"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const constants_1 = require("../common/constants");
const user_model_1 = require("../models/user.model");
class UserService {
    constructor() {
        this.createUser = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = new user_model_1.User(user);
                yield newUser.save();
                console.log("User created");
            }
            catch (error) {
                console.log("User creation failed");
            }
        });
        this.getUser = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                const foundUser = yield user_model_1.User.findOne({ email }).exec();
                if (!constants_1.isNullOrUndefined) {
                    return foundUser;
                }
                else
                    return new user_model_1.User("");
            }
            catch (error) {
                console.log("User not found");
            }
        });
        this.updateUser = (newUser) => __awaiter(this, void 0, void 0, function* () {
            try {
                const foundUser = yield user_model_1.User.findOneAndUpdate({ email: newUser.email }, newUser).exec();
                if (!(0, constants_1.isNullOrUndefined)(foundUser)) {
                    return foundUser;
                }
                else
                    return new user_model_1.User("");
            }
            catch (error) {
                console.log("User not found");
            }
        });
        this.removeUser = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_model_1.User.findOneAndRemove({ email: email }).exec();
            }
            catch (error) {
                console.log("User not found");
            }
        });
        this.removeWhatsapp = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_model_1.User.findOne({ email }).updateOne({ $unset: { contacts: { whatsapp: "" } } }).exec();
            }
            catch (error) {
                console.log("Could not remove Whatsapp number");
            }
        });
        this.removePhone = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_model_1.User.findOne({ email }).updateOne({ $unset: { contacts: { telephone: "" } } }).exec();
            }
            catch (error) {
                console.log("Could not remove phone number");
            }
        });
    }
}
exports.UserService = UserService;
