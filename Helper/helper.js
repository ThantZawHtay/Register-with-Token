const bcrypt=require('bcryptjs');
const salt=bcrypt.genSaltSync(10);
const jwt =require('jsonwebtoken');


const message=async(res,msg="success",result=[])=>{
    res.status(200).json({
        msg,
        result
    })
}

module.exports={
    message,
    encode: password=>bcrypt.hashSync(password,salt),
    userPass:(plain,hash)=>bcrypt.compareSync(plain,hash),
    userToken:payload=>jwt.sign(payload,"r4IEOEOE#",{expiresIn:"1h"})

}