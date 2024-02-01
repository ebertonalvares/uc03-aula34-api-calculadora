import { randomUUID } from 'node:crypto'

<<<<<<< HEAD
export default class Conta{
    constructor(nome_pessoa, agencia, numero_conta, tipo_conta, transacoes){
        this.conta_id = randomUUID();
        this.agencia = agencia;
        this.numero_conta = numero_conta;
        this.nome_pessoa = nome_pessoa; // Objeto Pessoa
        this.tipo_conta = tipo_conta;
        this.transacoes = transacoes || []; // Lista de Objetos transacao
        this.saldo = 0;
    }
=======
export default class Conta {
  constructor(agencia, numero_conta, nome_pessoa, tipo_conta, transacoes) {
    this.conta_id = randomUUID();
    this.agencia = agencia;
    this.numero_conta = numero_conta;
    this.nome_pessoa = nome_pessoa;
    this.tipo_conta = tipo_conta;
    this.transacoes = transacoes || []; // Lista de Objetos Transacao
    this.saldo = 0;
  }
>>>>>>> e89f53966c002980489956246c14148c46f14142
}