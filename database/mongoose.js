const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

mongoose.connect("mongodb://127.0.0.1:27017/shop").then(console.log("connection success for reigister"));

const schema=mongoose.Schema({
    name:{type:String,require:true, unique:true},
    email:{type:String,require:true, unique:true},
    password:{type:String,require:true},
    created:{type:Date,default:Date.now}
});



const Registe=mongoose.model("register",schema);
module.exports=Registe;