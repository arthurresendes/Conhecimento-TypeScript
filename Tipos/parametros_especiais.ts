type Charater = {
    readonly id: number;
    name: string;
    age ?: number; // ? = Opcional
};

let person1: Charater = {id: 1, name: "Arthur", age: 19}
let person2: Charater = {id: 2, name: "Josias"}

console.log(person1)
console.log(person2)
