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
const database_1 = require("../database");
class UsuariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const coon = yield (0, database_1.connect)();
            const user = yield coon.query('select * from usuarios');
            return res.json(user[0]);
        });
    }
    list_id(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id } = req.params;
            const coon = yield (0, database_1.connect)();
            const user = yield coon.query('select * from usuarios where id_usuario = ?', [id]);
            return res.json(user[0]);
        });
    }
    list_mon_usu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id } = req.params;
            const coon = yield (0, database_1.connect)();
            const user = yield coon.query('select monedas.id_moneda,nombre_moneda,simbolo_moneda,valor_moneda from usuarios_monedas inner join monedas on usuarios_monedas.id_moneda = monedas.id_moneda where usuarios_monedas.id_usuario = ?', [id]);
            return res.json(user[0]);
        });
    }
    list_mon_disponibles_usu_pais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id } = req.params;
            const coon = yield (0, database_1.connect)();
            const user = yield coon.query('select monedas.id_moneda, monedas.nombre_moneda from usuarios inner join paises on usuarios.id_pais = paises.id_pais inner join monedas on paises.id_moneda = monedas.id_moneda where usuarios.id_usuario = ? and monedas.id_moneda NOT IN ( select monedas.id_moneda from usuarios_monedas inner join monedas on usuarios_monedas.id_moneda = monedas.id_moneda where usuarios_monedas.id_usuario = ? )', [id, id]);
            return res.json(user[0]);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const coon = yield (0, database_1.connect)();
            // paisesController.list_moneda_pais({});
            yield coon.query('INSERT INTO usuarios set ?', [req.body]);
            return res.json(req.body);
            //token
        });
    }
    create_mon_usu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const coon = yield (0, database_1.connect)();
            // paisesController.list_moneda_pais({});
            yield coon.query('INSERT INTO usuarios_monedas set ?', [req.body]);
            return res.json({ text: 'Moneda agregada correctamente' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id } = req.params;
            const coon = yield (0, database_1.connect)();
            yield coon.query('DELETE FROM usuarios WHERE  id_usuario = ?', [id]);
            return res.json({ text: 'Usuario ' + id + ' eliminado correctamente' });
        });
    }
    deleteUsuarioMoneda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id } = req.params;
            const { mon } = req.params;
            const coon = yield (0, database_1.connect)();
            yield coon.query('DELETE FROM usuarios_monedas WHERE  id_usuario = ? and id_moneda = ?', [id, mon]);
            return res.json({ text: 'Usuario ' + id + ' eliminado correctamente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const coon = yield (0, database_1.connect)();
            yield coon.query('update usuarios set ? where id_usuario = ?', [req.body, id]);
            return res.json({ text: 'Usuario ' + id + ' actualizado correctamente' });
        });
    }
}
const usuariosController = new UsuariosController();
exports.default = usuariosController;
