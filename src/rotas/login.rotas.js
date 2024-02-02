import {Router, request} from 'express'


const router = Router()

const usuarios = [{
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
    //devolver para o usuario
    
    if (usuario.senha === senha){
        response.send({message: "Usuario autenticado"})
    }else{
        response.send({message: "Usuário invalido"})
    }

}) 


export default {router}