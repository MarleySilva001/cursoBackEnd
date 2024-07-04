const teste = [1,2,3,4,5,6]

function filtrarPares(arr) {
    nova_arr=[]
    for(i=0; i < arr.length; i++){
        if(arr[i] % 2 === 0) {
            nova_arr.push(arr[i])
        }
    }
    return nova_arr
}

console.log(filtrarPares(teste))