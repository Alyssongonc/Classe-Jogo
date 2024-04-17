class heroi{
    constructor(nome, idade, tipo, habilidade){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.habilidade = habilidade
    }
    acao(){
        console.log(`O ${this.tipo} atacou ${this.habilidade}`)
    }
}
let acaoHeroi = new heroi("Alyn", "23", "ninja", "usando shuriken")
acaoHeroi.acao()