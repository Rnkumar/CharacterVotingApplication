const express = require('express');
const path = require('path')
const app = express();
const PORT =  process.env.port || 5001;

app.use(express.static(path.resolve(__dirname,'build')))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname = 'build/index.html'))
})

app.listen(PORT,function(){
    console.log("App listening in PORT=>"+PORT)
});