import { TokenValidation } from './../libs/verifyToken';
import { Router } from 'express';
import paisesController  from '../controllers/paisesController';


class PaisesRoutes {

    public router : Router = Router();

    constructor() {
        this.config();
    }

    config() : void {
        this.router.get('/', TokenValidation, paisesController.list);
        this.router.get('/monedas',  paisesController.listMonedas);
        this.router.get('/:id', paisesController.list_id);
        this.router.get('/list-moneda-pais/:id',  paisesController.list_moneda_pais);
        this.router.get('/list-moneda-pais-usuario/:id',  paisesController.list_moneda_pais_user);
        this.router.post('/', paisesController.create);
        this.router.delete('/:id', paisesController.delete);
        this.router.put('/:id',  paisesController.update);
    }

}

const paisesRoutes = new PaisesRoutes();
export default paisesRoutes.router;
