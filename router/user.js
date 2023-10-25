const router=require('express').Router();
const controller=require("../controller/user");
const {RegisterSchema}=require("../utils/schema");
const {validateBody}=require ("../utils/validator")
const {Tokens}=require("../utils/validator");

router.post("/",[validateBody(RegisterSchema),controller.all]);
router.post("/login",controller.login);
router.post("/post",Tokens,controller.UserPost);


module.exports=router;
