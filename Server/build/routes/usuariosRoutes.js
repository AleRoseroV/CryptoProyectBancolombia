"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = __importDefault(require("../controllers/usuariosController"));
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuariosController_1.default.list);
        this.router.get('/listar-monedas-usuario/:id', usuariosController_1.default.list_mon_usu);
        this.router.get('/:id', usuariosController_1.default.list_id);
        this.router.get('/listar-monedas-disponibles-usuario/:id', usuariosController_1.default.list_mon_disponibles_usu_pais);
        this.router.post('/', usuariosController_1.default.create);
        this.router.post('/create-mon-usu/', usuariosController_1.default.create_mon_usu);
        this.router.delete('/:id', usuariosController_1.default.delete);
        this.router.delete('/delete-usuario-moneda/:id/:mon', usuariosController_1.default.deleteUsuarioMoneda);
        this.router.put('/:id', usuariosController_1.default.update);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
