import jwt from 'jsonwebtoken'

const adminLogin = async(req,res) => {

    try{
         const{ email,password } = req.body
     if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
        return res.json({ success:false,message:'Invalid admin credentials' })
     }

     const token = await jwt.sign({email},process.env.JWT_SECRET)
     return res.json({success:true,token})
    }
    catch(err){
        return res.json({success:false,message:err.message})
    }

}

export default adminLogin