import { TokenValidation } from './../libs/verifyToken';
import { Router } from 'express';
import loginController  from '../controllers/loginController';
import {validateCreate} from '../validators/login';

class LoginRoutes {

    public router : Router = Router();

    constructor() {
        this.config();
    }

    config() : void {
        this.router.get('/profile/:id', TokenValidation, loginController.profile);
        this.router.post('/sigin', loginController.sigin);
        this.router.post('/sigup', loginController.sigup);
    }

}

const loginRoutes = new LoginRoutes();
export default loginRoutes.router;
