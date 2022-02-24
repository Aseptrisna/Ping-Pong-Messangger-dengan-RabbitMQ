const express=require ('express');
const app=express();
const dotenv = require('dotenv');
dotenv.config();
const Port=process.env.PORT;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended:true,
    limit: '50mb'
  }))

app.use('/app',require('./src/route/worker'))
app.get("/", (req, res) => {
    res.json({ message: "Quiz DAI" });
  });

app.listen(Port,()=>console.log('server running:'+Port))
