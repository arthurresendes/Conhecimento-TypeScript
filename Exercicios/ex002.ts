function calcularMedia(num1: number, num2:number, num3:number): string{
    const res = (num1+num2+num3)/3
    if(res >= 6){
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}

console.log(calcularMedia(4,10,1))