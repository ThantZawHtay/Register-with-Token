const controller=require('express');
const mongoose=require("../database/mongoose");
const helper=require("../Helper/helper");




const all=async(req,res,next)=>{
   
   const nameUse=await mongoose.findOne({name:req.body.name});
   if(nameUse){
    next(new Error("Name is already use "));
    return;
   }

   const email=await mongoose.findOne({email:req.body.email});
   if(email){
    next(new Error("Email is already use "));
    return;
   }
   req.body.password=helper.encode(req.body.password);
    const user=await mongoose.create(req.body);
    helper.message(res,"sucess",user);


}


const login=async(req,res,next)=>{
const Lname=await mongoose.findOne({name:req.body.name}).select("-__v");
// console.log(Lname.password);
// console.log(req.body.password);

const NameCheck=helper.userPass(req.body.name,Lname.name)
const PasswordCheck=helper.userPass(req.body.password,Lname.password);
let user=Lname.toObject();
delete user.password;
user.userTacket=helper.userToken(user);
if(NameCheck || PasswordCheck){
  console.log("Loginn Successful");
  res.json(user);
  //res.json(helper.userToken(Lname));
}
else{
  console.error("Wrong ");
}


}


const UserPost=async(req,res,next)=>{
  console.log("Post token check")

}

module.exports={
    all,
    login,
    UserPost
}


