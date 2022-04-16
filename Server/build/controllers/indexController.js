"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('Hola mundo');
    }
}
const indexController = new IndexController();
exports.default = indexController;
