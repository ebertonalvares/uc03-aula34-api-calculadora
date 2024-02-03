import {Router, request} from 'express'
import jwtUtils from '../utils/jwt.utils.js'

const router = Router()

const usuarios = [{
    usuario_id:'bb471a58-bade-49e1-9a32-5e62d4cc0766',
    email: 'fulano@email.com',
    senha:'123456'
}]
router.post("/login", (request, response)=>{
    const {email, senha} = request.body

    const usuario = usuarios.find((usuario) => usuario.email === email)

    if(!usuario){
        response.send({error: "Usuário invalido"})
    }
    //gerar o JWT json wEB Token
    const payload = {
        usuario_id: usuario.usuario_id,
        email: usuario.email
    }
const token = jwtUtils.generateToken(payload)

    //devolver para o usuario
    
    if (usuario.senha === senha){
        response.send({message: "Usuario autenticado", jwt:token})
    }else{
        response.send({message: "Usuário invalido"})
    }

}) 


export default {router}