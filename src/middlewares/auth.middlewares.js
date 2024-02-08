import jwtUtils from "../utils/jwt.utils.js"


function authorizeMiddleware(request, response, next){
    //busca do headers o paramentro Authorization
    
    const {authorization} = request.headers


    //validar se o token foi informado, caso nao retorna erro 401 - Unauthenticated
   
    if(!authorization){
        response.status(401).send({message: "Usuario nao autenticado"})
    }
    const[bearer, token] = authorization.split(" ")
    const tokenValidado = jwtUtils.validateToken(token)


    //validar se o token esta valido, caso nao esteja retornar erro 403 - unauthorized
if(!tokenValidado || tokenValidado.error){
    response.status(403).send({messagem: 'Token Invalido'})
}


    request.session = tokenValidado.payload
    //seguir com a requisicao 
    next()
}

export {authorizeMiddleware}