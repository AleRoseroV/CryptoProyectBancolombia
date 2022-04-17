import { Router } from 'express';
import usuariosController from '../controllers/usuariosController';
import { TokenValidation } from './../libs/verifyToken';

class UsuariosRoutes {

    public router : Router = Router();

    constructor() {
        this.config();
    }

    config() : void {
        this.router.get('/', usuariosController.list);
        this.router.get('/listar-monedas-usuario/:id', usuariosController.list_mon_usu);
        this.router.get('/monedas/:id',  usuariosController.listMonedas_id);
        this.router.get('/:id', usuariosController.list_id);
        this.router.get('/listar-monedas-disponibles-usuario/:id', usuariosController.list_mon_disponibles_usu_pais);
        this.router.post('/', usuariosController.create);
        this.router.post('/create-mon-usu/', usuariosController.create_mon_usu);
        this.router.delete('/:id',usuariosController.delete);
        this.router.delete('/delete-usuario-moneda/:id/:mon',usuariosController.deleteUsuarioMoneda);
        this.router.put('/:id', usuariosController.update);
        this.router.put('/actualiza-moneda/:id', usuariosController.updateMoneda);
    }

}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;
