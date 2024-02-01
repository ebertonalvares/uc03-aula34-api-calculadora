import { randomUUID } from 'node:crypto'

<<<<<<< HEAD
export default class Transacao{
    constructor(tipo, valor, descricao){
        this.transacao_id = randomUUID();
        this.tipo = tipo;
        this.valor = valor;
        this.descricao = descricao;
    }
=======
export default class Transacao {
  constructor(tipo, valor, descricao) {
    this.transacao_id = randomUUID();
    this.tipo = tipo;
    this.valor = valor;
    this.descricao = descricao;
  }
>>>>>>> e89f53966c002980489956246c14148c46f14142
}