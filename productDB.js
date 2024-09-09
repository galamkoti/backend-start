require("dotenv").config();
const connectDb=require("./db/connect");
const Product = require("./models/product");
const ProductJson=require("./product.json");

const start= async () =>{
    try {
        await connectDb(process.env.MONGO_URL);
        await Product.create(ProductJson);
        console.log("sucess");
    } catch (error) {
        console.log(error);
    }
}



start();