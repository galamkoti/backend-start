const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const {name,company}=req.query;
    const queryObject={};
    if(company){
        queryObject.company={$regex:company,$options:"i"};
    }
    if(name){
        queryObject.name={$regex:name,$options:"i"};
    }
    console.log(queryObject)
    const productData = await Product.find(queryObject);
    res.status(200).json({ productData });
}

const getAllTestingProducts = async (req, res) => {
    const productData = await Product.find(req.query).sort("-name");
    res.status(200).json({ productData });
}

module.exports = { getAllProducts, getAllTestingProducts };