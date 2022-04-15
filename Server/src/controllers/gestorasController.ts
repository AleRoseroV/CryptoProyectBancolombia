import {Request , Response} from 'express';
import { connect } from '../database';
import jwt from 'jsonwebtoken';

class GestorasController {

    public async listGestoras (req: Request, res : Response) {
        const coon = await connect();      
        const gestoras = await coon.query('select id_gestora, nombre_gestora from gestoras group by id_gestora, nombre_gestora');
        return res.json(gestoras[0]);

    } 

    public async listMonedasGestoras (req: Request, res : Response) {
        console.log(req.params);
        const {id} = req.params;
        const coon = await connect();      
        const resul = await coon.query('select nombre_moneda,simbolo_moneda,valor_moneda from gestoras inner join monedas on gestoras.id_moneda = monedas.id_moneda where id_gestora=?' , [id]);
        return res.json(resul[0]); 

    }
    
    public async createGestora (req: Request, res : Response) {
        console.log(req.body);
        const coon = await connect(); 
        await  coon.query('INSERT INTO gestoras set ?',[req.body]);
        return res.json(req.body);
    }
}
const gestorasController = new GestorasController();
export default gestorasController;