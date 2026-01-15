function maxNumber(arr: number[]){
    return arr.reduce((max, item) => (item > max ? item : max))
}

const max= maxNumber([1,2,3])
console.log(max)