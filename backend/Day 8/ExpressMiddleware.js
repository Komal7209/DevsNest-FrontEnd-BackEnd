 

// here we have written two functions
// here, next function(acts as main function) would be called after first function executes well, get executed
// this is how middlewares work, first test function is executed that everything is working fine and after that main function works (as here)with the help of next


////// middleware is a function which executes just before actual function  //////

const express = require('express');  // express passes function definition which need to be passed in app i.e app will call express 
const app = express();

app.get('/', (req, res, next)=>{
    console.log(" in first");       // output will be on node console
    next();
}
,(req, res)=>{
    res.status(200);                // ouput will be on postman 
    res.json(req.query);
});

app.post('/', (req,res) =>{
    res.json({text:req.body})
})

app.listen(5000);


//////////////////////////////////////////////////////

//Eg: we need to check if present person is admin or not and according to that we want to give access then we will do followig things

// http://localhost:5000/?admin=true

const express = require('express');  // express passes function definition which need to be passed in app i.e app will call express 
const app = express();

app.get('/', (req, res, next)=>{
    console.log("in first" , req.query);       // output will be on node console
    if(req.query.admin === 'true') {          // using === to stringify   // we get a url's query through.. req.query()
    next();
    }
    else {
        res.status(400).send("should be admin");
    }
}
,(req, res)=>{
    res.status(200);                // ouput will be on postman 
    res.json(req.query);
});

app.post('/', (req,res) =>{
    res.json({text:req.body})
})

app.listen(5000);

/////////////////////////////////////////////////

// beautifying above 


const express = require('express');  // express passes function definition which need to be passed in app i.e app will call express 
const { send } = require('process');
const app = express();

const checkAdmin = (req, res, next)=>{
    console.log("in first" , req.query);       // output will be on node console
    if(req.query.admin === 'true') {          // using === to stringify   // we get a url's query through.. req.query()
    next();                                   // next function
    }
    else {
        res.status(400).send("should be admin");
    }
};

const sendRes = (req, res)=>{
    res.status(200);                // output will be on postman 
    res.json(req.query);
};

app.get('/', checkAdmin, sendRes);

app.post('/', (req,res) =>{
    res.json({text:req.body})
})

app.listen(5000);

//////////////////////////////////////////////////////////

// we could use 