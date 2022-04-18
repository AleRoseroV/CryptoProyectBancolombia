"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_1 = require("./../libs/verifyToken");
const express_1 = require("express");
const loginController_1 = __importDefault(require("../controllers/loginController"));
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/profile/:id', verifyToken_1.TokenValidation, loginController_1.default.profile);
        this.router.post('/sigin', loginController_1.default.sigin);
        this.router.post('/sigup', loginController_1.default.sigup);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
