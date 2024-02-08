import database from '../database/index.js'
import { randomUUID } from 'node:crypto'


class PessoaController{
    async cadastrar(request , response)
    {
        const { nome_completo, cpf, usuario, senha} = request.body
        console.log(nome_completo, cpf, usuario, senha)
        const db = database.getDB()
    
        //Validar se nao existe uma pessoa com o mesmo CPF
        const pessoaExiste = await db.oneOrNone(
            `SELECT * 
             FROM banco.PESSOAS 
             WHERE banco.PESSOAS.deleted_at is null 
               AND banco.PESSOAS.cpf = $1`,
            [cpf])
        
        if(pessoaExiste){
            response.status(403).send({message:'Já existe um cadastro de pessoa com este CPF'})
            return
        }
    
        const pessoa = await db.one(
            `INSERT INTO banco.PESSOAS (pessoa_id, nome_completo, cpf, usuario, senha, created_at, updated_at) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING pessoa_id`,
            [randomUUID(), nome_completo, cpf, usuario, senha, new Date(), new Date()]
          )
    
        response.send({message: "Cadastro de pessoa efetuado com sucesso",
        pessoa_id:pessoa.pessoa_id
    })
    }

    async login(request, response) {
        const {usuario, senha} = request.body
    
        const db = database.getDB()
    
        //Buscar pessoa pelo nome de usuario
        const pessoa = await db.oneOrNone(
            `SELECT * 
             FROM banco.PESSOAS 
             WHERE banco.PESSOAS.deleted_at is null 
               AND banco.PESSOAS.usuario = $1`,
            [usuario])
    
        if(!pessoa){
            response.send({error: "Usuário invalido"})
        }
        //gerar o JWT json wEB Token
        const payload = {
           pessoa_id:pessoa.pessoa_id,
           privilegio: pessoa.privilegio
        }
    const token = jwtUtils.generateToken(payload)
    
        //devolver para o usuario
        
        if (pessoa.senha === senha){
            response.send({message: "Usuario autenticado", jwt:token})
        }else{
            response.send({message: "Usuário invalido"})
        }
    
    }
    
    async atualizar(request, response){
        //obter do body os campos para atualizar 
        const { nome_completo, cpf, usuario, senha, privilegio} = request.body
        const{session} = request;
        const {pessoa_id} = request.params
        const db = database.getDB()
        //vai verificar se existe uma conta com esse id
        //validar se é a propria pessoa que esta logada fazendo a atualizacao
        if(session.pessoa_id === pessoa_id){
            //pode atualizar nome completo, cpf, nome de usuario e senha
            const parametros_update = {
                nome_completo: pessoa.nome_completo !== nome_completo ? nome_completo : pessoa.nome_completo,
                cpf: pessoa.cpf !== usuario ? usuario : pessoa.usuario, 
                usuario: pessoa.usuario !== usuario ? usuario : pessoa.usuario, 
                senha: pessoa.senha !== senha ? senha :pessoa.senha,    
            }


            const pessoa = await db.one(
                `UPDATE INTO banco.PESSOAS Set(nome_completo, cpf, usuario, senha, created_at, updated_at) 
                VALUES ($1, $2, $3, $4, $5, $6, ) RETURNING pessoa_id`,
                [randomUUID(), nome_completo, cpf, usuario, senha, new Date(), new Date()]
              )
        }
        await db.none(
            `UPDATE banco.PESSOAS 
             SET nome_completo = 1$, cpf = $2, usuario = $3, senha = $4, updated_at = $5
             WHERE pessoa_id = $6`,
            [
                parametros_update.nome_completo,
                parametros_update.cpf,
                parametros_update.usuario,
                parametros_update.senha,
                new Date(),
                pessoa_id
            ]
          )
     //     
    //pessoa.nome_completo != nome_completo ? nome_completo : pessoa.nome_completo,
        if(!pessoa){
            response.send({error: "Cadastro de pessoa nao encontrado", pessoa_id})
        } 
    
        //senao, validar se a pessoa é um bancario ou admin
    
        //atualizar o registro 
    
    }
}


export default new PessoaController();
