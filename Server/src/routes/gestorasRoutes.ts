import { Router } from 'express';
import gestorasController from '../controllers/gestorasController';
import { TokenValidation } from './../libs/verifyToken';

class GestorasRoutes {

    public router : Router = Router();

    constructor() {
        this.config();
    }

    config() : void {
        this.router.get('/listar', gestorasController.listGestoras);
        this.router.get('/list-moneda-gestora/:id',  gestorasController.listMonedasGestoras);
        this.router.post('/crear-gestora', gestorasController.createGestora);

    }

}

const gestorasRoutes = new GestorasRoutes();
export default gestorasRoutes.router; 