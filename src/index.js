import express from 'express'
<<<<<<< HEAD
import Transacao from './entidades/transacao'
import Conta from './entidades/conta.js'
=======

import Conta from './entidades/conta.js'
import Transacao from './entidades/transacao.js'
>>>>>>> e89f53966c002980489956246c14148c46f14142

const app = express()
const port = 5000

app.use(express.json())

let contas = []
<<<<<<< HEAD
contas.push(new Conta("Davi","1234", "12345-6",  "corrente"))
contas.push(new Conta("Murilo","1234", "5432-1",  "corrente"))
contas.push(new Conta( "Eberton","1234", "1313-0", "corrente"))
=======
contas.push(new Conta("1234", "12345-6", "Davi", "corrente"))
contas.push(new Conta("1234", "5432-1", "Murilo", "corrente"))
contas.push(new Conta("1234", "1313-0", "Eberton", "corrente"))
>>>>>>> e89f53966c002980489956246c14148c46f14142

function buscaContaPorNumero(numero_conta) {
  return contas.find(
    (conta) => conta.numero_conta === numero_conta
  )
}
<<<<<<< HEAD
function insereTransacao(numero_conta, tipo_transacao, valor, descricao) {
  for (const conta of constas) {
    if (conta.numero_conta === numero_conta) {
      const transacao = new Transacao(tipo_transacao, valor, descricao)
      conta.trasacoes.push(transacao)
=======

function insereTransacao(numero_conta, tipo_transacao, valor, descricao) {
  for (const conta of contas) {
    if (conta.numero_conta === numero_conta) {
      const transacao = new Transacao(tipo_transacao, valor, descricao)
      conta.transacoes.push(transacao)
>>>>>>> e89f53966c002980489956246c14148c46f14142
      return transacao.transacao_id
    }
  }
}
<<<<<<< HEAD
=======

>>>>>>> e89f53966c002980489956246c14148c46f14142

app.get("/status", (request, response) => {
  response.send({ "status": "ok" })
})

// Rota Boas Vindas 
app.get('/conta/:numero_conta', (request, response) => {
  const { numero_conta } = request.params;

  const contaEncontrada = buscaContaPorNumero(numero_conta);

  if (contaEncontrada) {
    // retornar os dados da conta
    response.send({
      nome_pessoa: contaEncontrada.nome_pessoa,
      numero_conta: contaEncontrada.numero_conta,
<<<<<<< HEAD
      transacoes: contaEncontrada.trasacoes,
=======
      transacoes: contaEncontrada.transacoes,
>>>>>>> e89f53966c002980489956246c14148c46f14142
      saldo: contaEncontrada.saldo
    })
  } else {
    response.status(404).send({
      "error": "Conta não encontrada"
    })
  }
});


// Rota Saldo
app.get('/conta/:numero_conta/saldo', (request, response) => {
  const { numero_conta } = request.params;

  const contaEncontrada = buscaContaPorNumero(numero_conta);
<<<<<<< HEAD

=======
>>>>>>> e89f53966c002980489956246c14148c46f14142

  if (contaEncontrada) {
    // retornar os dados da conta
    response.send({
      "saldo": contaEncontrada.saldo
    })
  } else {
    response.status(404).send({
      "error": "Conta não encontrada"
    })
  }
});

// Rota depósito
app.post('/conta/:numero_conta/deposito', (request, response) => {
  const { numero_conta } = request.params;

<<<<<<< HEAD
  const { valor } = request.body;
  let tipo_deposito = ''
  if (request.body.tipo_deposito) {
    tipo_deposito = request.body.tipo_deposito.toUpperCase()
  }
=======
  const { valor, tipo_deposito } = request.body;

  const contaEncontrada = buscaContaPorNumero(numero_conta);
>>>>>>> e89f53966c002980489956246c14148c46f14142

  const contaEncontrada = buscaContaPorNumero(numero_conta);
  // validar se a conta existe
<<<<<<< HEAD

=======
>>>>>>> e89f53966c002980489956246c14148c46f14142
  if (!contaEncontrada) {
    response.send({
      "error": "Conta não encontrada"
    })
  }

  // validar se o valor é positivo
  if (!valor || valor <= 0) {
    response.send({
      "error": "Valor inválido"
    })
  }

  // validar qual o tipo de depósito (DINHEIRO ou CHEQUE)
<<<<<<< HEAD
  const tipos_validos = ["DINHEIRO", "CHEQUE"]
  if (!tipos_deposito || !tipos_validos.includes(tipo_deposito.toUpperCase())) {
=======
  const tipos_validos = ['DINHEIRO', 'CHEQUE']
  if (!tipo_deposito || !tipos_validos.includes(tipo_deposito.toUpperCase())) {
>>>>>>> e89f53966c002980489956246c14148c46f14142
    response.send({
      "error": "Tipo Deposito inválido"
    })
  } else if (tipo_deposito.toUpperCase() === 'DINHEIRO') {
    if (!Number.isInteger(valor)) {
      response.status(400).send({ "error": "Depósito em dinheiro apenas com valores inteiros." })
    }
    const transacao_id = insereTransacao(numero_conta, "ENTRADA", valor, `Depósito em ${tipo_deposito}`)
    response.send({
      message: "Transação efetuada com sucesso.",
      transacao_id
    })
  } else if (tipo_deposito.toUpperCase() === 'CHEQUE') {
    const transacao_id = insereTransacao(numero_conta, "ENTRADA", valor, `Depósito em ${tipo_deposito}`)
    response.send({
      message: "Transação efetuada com sucesso.",
      transacao_id
    })
<<<<<<< HEAD
  } else if (tipo.toUpperCase() === 'DINHEIRO') {
    if (!Number.isInteger(valor)) {
      response.status(400).send({ "error": "Deposito em dinheiro apenas com valores inteiros." })
      insereTransacao(numero_conta, "ENTRADA", valor`Deposito em ${tipo_deposito}`)
      response.send({
        message: "transação efetuada com sucesso ",

      })
    }

  } else if (tipo.toUpperCase() === 'CHEQUE') {
    insereTransacao(numero_conta, "ENTRADA", valor`Deposito em ${tipo_deposito}`)
  }
});
=======
  }

})
>>>>>>> e89f53966c002980489956246c14148c46f14142



app.listen(port, () => {
  console.log(`API rodando na porta ${port}`)
})