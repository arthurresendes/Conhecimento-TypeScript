let nome: string = "Arthur"
let idade: number = 19
let estudante: boolean = true
let curso: string = "Desenvolvimento de software multiplataforma - DSM"

function apresentar(): string{
    if(estudante){
        return `Olá, meu nome é ${nome}, tenho ${idade} anos e estudo ${curso}.`
    }else{
        return `Olá, meu nome é ${nome}, tenho ${idade} anos e não sou estudante.`
    }
}

console.log(apresentar())