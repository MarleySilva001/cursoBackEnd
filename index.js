const express = require('express')
require("dotenv").config()
const connectDB = require('./db')

const app = express()


connectDB()

app.get('/test-api', function (req,res){
    res.send(' CALIU ')
})

app.listen(8000)
















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