const express = require('express')
const app = express()

app.get('/',function(req,res){
   res.send("Ola Juan Alves")
})
app.get('/mensagem',function(req,res){
    res.send("essa mensagem é automatica")
})
app.listen(3000,function(){
    console.log("Conexão inicializada")
})