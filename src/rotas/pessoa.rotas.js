import {Router} from 'express'
import{authorizeMiddleware}from '../middlewares/auth.middlewares.js'
import pessoaController from '../controllers/pessoa.controller.js'

const router = Router()

//////////////////Login pessoa//////////////////

router.post("/login",pessoaController.login) 

//////////////////Cadastro de pessoas//////////////////

router.post('/cadastrar', pessoaController.cadastrar) 

//////////////////atualizacao cadastro//////////////////
 
router.patch('/:pessoa_id/atualizar', authorizeMiddleware, pessoaController.atualizar )

export default {router}