const express = require("express");
const Route = require("./authentication");
const Login = require("./login");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json());

app.use("/login",Login);

app.use("/Auth", Route);


app.get("/", (req,res)=>{
    res.send("hellow");
})

app.listen( process.env.PORT || 9090 , ()=>{
    console.log("server is running");
})