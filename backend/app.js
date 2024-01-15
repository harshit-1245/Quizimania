const express=require("express")
const colors = require("colors")
const app=express()

require("dotenv").config()
const port = process.env.PORT


app.listen(port,()=>{
    console.log(`server live at ${port}`.yellow.bgYellow)
})

