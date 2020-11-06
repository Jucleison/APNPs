const express = require('express')
const app = express()
var bodyParser = require('Body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlincoded({extended:false}))

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))

app.get('/',function(req,res){
   res.send("Ola Juan Alves")
})

app.listen(3000,function(){
    console.log("Conexão inicializada")
})