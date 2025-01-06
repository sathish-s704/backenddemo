import express from 'express';
import {fetch,create,update, deleteuser,findid}from '../controller/usercontroller.js';

const router = express.Router();
router.get('/fetch',fetch);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/delete/:id',deleteuser);
router.get('/find/:id',findid);
export default router;