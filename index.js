const express=require("express")
const app=express()
const products=require("./products")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const Content=require("./schema")
console.log(Content)

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb+srv://challasrinadh:challasrinadh@cluster0.tjyiuc0.mongodb.net/firstdb?retryWrites=true&w=majority")
    .then(()=>{
        console.log("mongodb is connected")
    })
    .catch((err)=>{
        console.log(err)
    })


app.get("/",(req,res)=>{
    res.send("server started succesfully")
})

app.post("/add",(req,res)=>{
    console.log("data from frent end ",req.body)
    const {name,password}=req.body
    const newData=new Content({
        name,password
    })
    newData.save()
    res.send("added")
})

app.get("/retrieve",(req,res)=>{
    Content.find()
      .then(found=>res.json(found))
})

app.get("/products",(req,res)=>{
    res.json(products)
})

app.get("/name",(req,res)=>{
    res.send("cdegnan ")
})



app.listen(4000,()=>console.log("server is started"))