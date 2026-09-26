interface Produto{
    id: number
    nome: string
    preco: number
    estoque: number
    promocao?: boolean
}

const listaProduto: Produto[] = [
    {id: 1, nome: 'Café', preco: 10.50, estoque: 5, promocao: true},
    {id: 2, nome: 'Café', preco: 20.50, estoque: 2, promocao: true},
    {id: 3, nome: 'Café', preco: 30.50, estoque: 35, promocao: false},
    {id: 4, nome: 'Café', preco: 40.50, estoque: 45},
    {id: 5, nome: 'Café', preco: 50.50, estoque: 55, promocao: true},
]

console.log(listaProduto)