const express= require("express")
const app=express();
const mongoose=require("mongoose");
const dotenv= require("dotenv");
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/product");
const path = require('path');

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("db connection succses"))
.catch((err)=>console.log(err));

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join("./client/build")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
    })
}
app.listen(process.env.PORT||5000,()=>{
    console.log("backend server live");
});