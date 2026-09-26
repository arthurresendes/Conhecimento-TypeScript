const formatarId = (id: number | string) => {
    if(typeof id === 'string'){
        return 'ID: ABC123'
    }else{
        return 'ID: 123'
    }
}

console.log(formatarId(123))
console.log(formatarId('123'))