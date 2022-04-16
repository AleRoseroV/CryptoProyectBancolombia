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
class GestorasController {
    listGestoras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const coon = yield (0, database_1.connect)();
            const gestoras = yield coon.query('select id_gestora, nombre_gestora from gestoras group by id_gestora, nombre_gestora');
            return res.json(gestoras[0]);
        });
    }
    listMonedasGestoras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id } = req.params;
            const coon = yield (0, database_1.connect)();
            const resul = yield coon.query('select nombre_moneda,simbolo_moneda,valor_moneda from gestoras inner join monedas on gestoras.id_moneda = monedas.id_moneda where id_gestora=?', [id]);
            return res.json(resul[0]);
        });
    }
    createGestora(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const coon = yield (0, database_1.connect)();
            yield coon.query('INSERT INTO gestoras set ?', [req.body]);
            return res.json(req.body);
        });
    }
}
const gestorasController = new GestorasController();
exports.default = gestorasController;
