"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_1 = require("./../libs/verifyToken");
const express_1 = require("express");
const paisesController_1 = __importDefault(require("../controllers/paisesController"));
class PaisesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', verifyToken_1.TokenValidation, paisesController_1.default.list);
        this.router.get('/monedas', paisesController_1.default.listMonedas);
        this.router.get('/:id', paisesController_1.default.list_id);
        this.router.get('/list-moneda-pais/:id', paisesController_1.default.list_moneda_pais);
        this.router.get('/list-moneda-pais-usuario/:id', paisesController_1.default.list_moneda_pais_user);
        this.router.post('/', paisesController_1.default.create);
        this.router.delete('/:id', paisesController_1.default.delete);
        this.router.put('/:id', paisesController_1.default.update);
    }
}
const paisesRoutes = new PaisesRoutes();
exports.default = paisesRoutes.router;
