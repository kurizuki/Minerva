import { Router } from "express";

export const customerRouters = Router();

customerRouters.get('/',(req, res) => {
    res.send('Hola mundo!!!!')
});

customerRouters.post('/login',(req, res) => {
    res.send("login")
});
customerRouters.post('/register',(req, res) => {
    const {email, password} = req.body;

    console.log(email + password);
    res.send("ho");

});
customerRouters.post('/logout',(req, res) => {
    res.send("logout")
});

customerRouters.get('/protected',(req, res) => {

});