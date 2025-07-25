import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Configs/db.js'
import adminRouter from './routes/adminRoute.js'
import blogRouter from './routes/blogRoute.js'

const app = express()

await connectDB()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>res.send("API is working"))
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log('Server is running on port ' + PORT)
})

export default app;
