const mongoose=require('mongoose')

const contentSchema={
    name:String,
    password:String
}

const Content=mongoose.model("project",contentSchema)

module.exports=Content