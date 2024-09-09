require("dotenv").config();
const express= require('express');
const app = express()
const port = process.env.port || 8000;
const product_routes = require("./routes/product");

const connectDB= require("./db/connect")


app.get('/',(req,res)=>{
    res.send("Hello World")
})
//middleware for connecting routes
app.use("/api/products",product_routes)

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(port,async () =>{
            console.log(`Listening on Port ${port}`)
        })
    }
    catch (error){  
        console.log(error)
    }
}

start();
