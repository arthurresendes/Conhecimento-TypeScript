interface Usuario {
    id: number;
    nome: string;
    email: string;
    idade: number;
    ativo: boolean;
}

const usuarios: Usuario[] = [
    {
        id: 1,
        nome: "Arthur",
        email: "arthur@email.com",
        idade: 20,
        ativo: true
    },
    {
        id: 2,
        nome: "Gabriel",
        email: "gabriel@email.com",
        idade: 22,
        ativo: false
    },
    {
        id: 3,
        nome: "Lucas",
        email: "lucas@email.com",
        idade: 19,
        ativo: true
    },
    {
        id: 4,
        nome: "Mariana",
        email: "mariana@email.com",
        idade: 21,
        ativo: true
    },
    {
        id: 5,
        nome: "Beatriz",
        email: "beatriz@email.com",
        idade: 24,
        ativo: false
    },
    {
        id: 6,
        nome: "Rafael",
        email: "rafael@email.com",
        idade: 23,
        ativo: true
    }
];

function listarUsers(){
    for(const user of usuarios){
        console.log(user)
    }
}

function buscarUser(id: number){
    for(const user of usuarios){
        if(user.id === id){
            console.log(user)
        }
    }
}

function listarUserAtivo(){
    for(const user of usuarios){
        if(user.ativo){
            console.log(user)
        }
    }
}

const calcularMediaIdade = () => {
    let idadeTotal: number = 0
    for(const user of usuarios){
        idadeTotal += user.idade
    }
    console.log(idadeTotal/usuarios.length)
}

const destaivarPorId = (id: number) => {
    for(const user of usuarios){
        if(user.id === id){
            user.ativo = false
        }
    }
}

listarUsers()
buscarUser(1)
listarUserAtivo()
calcularMediaIdade()
destaivarPorId(4)
listarUsers()