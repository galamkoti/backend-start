const express= require("express");

const routes = express.Router();

const {getAllProducts,getAllTestingProducts}=require('../controllers/product');


routes.route("/").get(getAllProducts);
routes.route("/testing").get(getAllTestingProducts);

module.exports=routes;