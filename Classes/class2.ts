class Animal{
   makeSound(): string{
     return "Sem som"
}
}

class Cachorro extends Animal{

  makeSound(): string{
   return "AuAu"
}
}

let an1 = new Cachorro()
console.log(an1.makeSound())