const mongoose= require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:[true,"price must be provided"]
    },
    rating:{
        type:Number,
        default:false
    },
    quantity:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","tcs","wipro","pashupanta"],
            message:`{VALUE} is not supported`
        }
    }
})

module.exports=mongoose.model("Product",ProductSchema);