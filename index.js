const { query } = require('express');
const express = require('express')
const app =express()

// objecct.mehod
app.get('/filter',function(req,res){
    //console.log(req.query.name);   //this is Object.property formula
    //console.log(req.query.surname);   //this is Object.property formula
    res.status(202).json({
                         Name:"shekhar",surname:"shinde","village":"Pimpalner",
                         //"information about Shubhangi": req.query.name,
                         "information about Shubhangi": req.query,
                         
                        })
})

app.listen(3000)