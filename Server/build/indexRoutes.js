"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Hola mundo'));
    }
}
new IndexRoutes();
