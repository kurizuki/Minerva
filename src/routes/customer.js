import { Router } from "express";
import { register, login, logout } from "../controllers/customerController.js";

export const customerRouters = Router();

customerRouters.get('/',(req, res) => {
    res.send('Hola mundo!!!!')
});

customerRouters.post('/login', login);
customerRouters.post('/register', register);
customerRouters.post('/logout', logout);

customerRouters.get('/protected',(req, res) => {

});