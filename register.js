const express=require('express');
const register=express();
const rou=require("./router/user");
register.use(express.json());


register.use("/register",rou);
register.use("/registers",rou);

register.listen(3000,console.log("Running registe"));