const joi=require('joi');
module.exports={
RegisterSchema:joi.object({
    name:joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().min(5).max(20).required()
})
}