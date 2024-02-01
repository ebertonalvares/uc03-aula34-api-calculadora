import { randomUUID } from 'node:crypto'

<<<<<<< HEAD

export default class Pessoa {
    constructor(nome_pessoa, cpf, rg, data_nascimento){
        this.pessoa_id = randomUUID();
        this.nome_pessoa = nome_pessoa;
        this.cpf = cpf;
        this.rg = rg;
        this.data_nascimento = data_nascimento;
    }
=======
export default class Pessoa {
  constructor(nome, cpf, rg, data_nascimento) {
    this.pessoa_id = randomUUID();
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.data_nascimento = data_nascimento;
  }
>>>>>>> e89f53966c002980489956246c14148c46f14142
}