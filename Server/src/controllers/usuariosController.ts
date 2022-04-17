import {Request , Response} from 'express';
import { connect } from '../database';


class UsuariosController {


    public async list (req: Request, res : Response) {
        const coon = await connect();      
        const user = await coon.query('select * from usuarios');
        return res.json(user[0]);

    }  

    public async list_id (req: Request, res : Response) {
        console.log(req.params);
        const {id} = req.params;
        const coon = await connect();      
        const user = await coon.query('select * from usuarios where id_usuario = ?' , [id]);
        return res.json(user[0]);  
    }

    public async list_mon_usu (req: Request, res : Response) {
        console.log(req.params);
        const {id} = req.params;
        const coon = await connect();      
        const user = await coon.query('select monedas.id_moneda,nombre_moneda,simbolo_moneda,valor_moneda from usuarios_monedas inner join monedas on usuarios_monedas.id_moneda = monedas.id_moneda where usuarios_monedas.id_usuario = ?' , [id]);
        return res.json(user[0]);  
    }

    public async listMonedas_id (req: Request, res : Response) {
        console.log(req.params);
        const {id} = req.params;
        const coon = await connect();      
        const user = await coon.query('select id_moneda,nombre_moneda,simbolo_moneda,valor_moneda from monedas where id_moneda = ?' , [id]);
        return res.json(user[0]);  
    }

    public async list_mon_disponibles_usu_pais (req: Request, res : Response) {
        console.log(req.params);
        const {id} = req.params;
        const coon = await connect();      
        const user = await coon.query('select monedas.id_moneda, monedas.nombre_moneda from usuarios inner join paises on usuarios.id_pais = paises.id_pais inner join monedas on paises.id_moneda = monedas.id_moneda where usuarios.id_usuario = ? and monedas.id_moneda NOT IN ( select monedas.id_moneda from usuarios_monedas inner join monedas on usuarios_monedas.id_moneda = monedas.id_moneda where usuarios_monedas.id_usuario = ? )' , [id,id]);
        return res.json(user[0]);  
    }

    public async create (req: Request, res : Response) {
        console.log(req.body);
        const coon = await connect(); 
       // paisesController.list_moneda_pais({});
        await  coon.query('INSERT INTO usuarios set ?',[req.body]);
        return res.json(req.body);
        //token
    }

    public async create_mon_usu (req: Request, res : Response) {
        console.log(req.body);
        const coon = await connect(); 
       // paisesController.list_moneda_pais({});
        await  coon.query('INSERT INTO usuarios_monedas set ?',[req.body]);
        return res.json({text: 'Moneda agregada correctamente'});

    }

    public async delete (req: Request, res : Response) {
        console.log(req.params);
        const {id} = req.params;
        const coon = await connect(); 
        await  coon.query('DELETE FROM usuarios WHERE  id_usuario = ?',[id]);
        return res.json({text: 'Usuario ' + id + ' eliminado correctamente'});
    }

    public async deleteUsuarioMoneda (req: Request, res : Response) {
        console.log(req.params);
        const {id} = req.params;
        const {mon} = req.params;
        const coon = await connect(); 
        await  coon.query('DELETE FROM usuarios_monedas WHERE  id_usuario = ? and id_moneda = ?',[id,mon]);
        return res.json({text: 'Usuario ' + id + ' eliminado correctamente'});
    }

    public async update (req: Request, res : Response) {
        console.log(req.body);
        const {id} = req.params;
        const coon = await connect(); 
        await  coon.query('update usuarios set ? where id_usuario = ?',[req.body,id]);
        return res.json({text: 'Usuario ' + id + ' actualizado correctamente'});
       
    }

    public async updateMoneda (req: Request, res : Response) {
        console.log(req.body);
        const {id} = req.params;
        const coon = await connect(); 
        await  coon.query('update monedas set  ? where id_moneda = ?',[req.body,id]);
        return res.json({text: 'Moneda ' + id + ' actualizado correctamente'});
       
    }
}


const usuariosController = new UsuariosController();
export default usuariosController;