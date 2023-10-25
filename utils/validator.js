const jwt=require('jsonwebtoken');

module.exports={
    validateBody: (schema)=>{
        return(req,res,next)=>{
            const result=schema.validate(req.body);
            if(result.error){
                next(new Error(result.error.details[0].message));
            }
            else{
                next();
            }

        }
    },

    Tokens: (req,res,next)=>{
        let token=req.headers.authorization;
       let tokn=token.split(" ")[1];
      
        const User=jwt.decode(tokn,"kdff");
        res.json(User);
        next();
       
    }
}

