const express = require('express')
const app = express()

app.get('/',function(req,res){
   res.send("Ola Juan Alves")
})

app.listen(3000,function(){
    console.log("Conexão inicializada na porta 3000")
})