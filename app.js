const express = require('express');
const app = express()



app.get('/',(req,res)=>{

    res.send({mess:"prodcut is running with help of nodemon dockers help"})

})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})