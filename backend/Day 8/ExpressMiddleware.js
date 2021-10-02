// when we are using nodejs and postman:
// what nodejs do is... in nodejs when we start with nodeman then it starts the server
// when server is being started then we can directly write that port name in postman and test that api
// this is how both are connected



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

// we could use checkAdmin middleware in varius other apis too...

///like....

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
    res.json(req.query);            // {"admin" : "true"}
};

app.get('/', checkAdmin, sendRes);

app.post('/', checkAdmin, (req,res) =>{
    res.json({text:req.body})
})

app.get('/',checkAdmin , (req, res)=>{
    res.status(500).send("database not connecting");
});


app.get('/ab?cd', checkAdmin,(req,res)=>{    //http://localhost:5000/acd
    res.send('abcd');
})    // when b is optional

app.get('/ab+cd', (req,res)=>{    //http://localhost:5000/abbbbbbbbbbbbbbbbbbbbbbbbbbbbbcd
    res.send('abcd');
}) // when we want to write b any number of times

app.get('/ab*cd', (req,res)=>{    //http://localhost:5000/abRANDOMcd
    res.send('abcd');
}) 


app.listen(5000);


//////////////////////////////////////////////////////

//if we want to use checkAdmin middleware with every api then we will use app.use()


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

app.use(checkAdmin);  // whatsoever middleware would be put here it will run in all apis

const sendRes = (req, res)=>{
    res.status(200);                // output will be on postman 
    res.json(req.query);
};

app.get('/', sendRes);

app.post('/', (req,res) =>{
    res.json({text:req.body})
})

app.get('/' , (req, res)=>{
    res.status(500).send("database not connecting");
});


app.get('/ab?cd',(req,res)=>{    //http://localhost:5000/acd
    res.send('abcd');
})    // when b is optional

app.get('/ab+cd', (req,res)=>{    //http://localhost:5000/abbbbbbbbbbbbbbbbbbbbbbbbbbbbbcd
    res.send('abcd');
}) // when we want to write b any number of times

app.get('/ab*cd', (req,res)=>{    //http://localhost:5000/abRANDOMcd
    res.send('abcd');
}) 


app.listen(5000);

///////////////////////////////////////////////////////////////////////

// if we want to check that if do we have authorisation for accessing further apis:
// url : http://localhost:5000/?auth=bdjedfrjnrktfrufce

const express = require('express');  // express passes function definition which need to be passed in app i.e app will call express 
const { send } = require('process');
const app = express();

const checkAuth = (req, res, next)=>{
    console.log("in first" , req.query);       // output will be on node console
    if(req.query.auth === 'bdjedfrjnrktfrufce') {          // using === to stringify   // we get a url's query through.. req.query()
    next();                                   // next function
    }
    else {
        res.status(400).send("should be authorised");
    }
};

app.use(checkAuth);  // whatsoever middleware would be put here it will run in all apis

// all these below are routes

const sendRes = (req, res)=>{
    res.status(200);               
    res.json(req.query);
};

app.get('/', sendRes);

app.post('/', (req,res) =>{
    res.json({text:req.body})
})

app.get('/' , (req, res)=>{
    res.status(401).send("database not connecting");  // status code for unauthorised user // when we use axios or fetch, then this 401 status code goes to .catch() of axios
                                                      //fetch('/').then().catch() // axios('/').then().catch()   // .then() handles success, .catch() handles error
});


app.get('/ab?cd',(req,res)=>{    //http://localhost:5000/acd
    res.send('abcd');
})    // when b is optional

app.get('/ab+cd', (req,res)=>{    //http://localhost:5000/abbbbbbbbbbbbbbbbbbbbbbbbbbbbbcd
    res.send('abcd');
}) // when we want to write b any number of times

app.get('/ab*cd', (req,res)=>{    //http://localhost:5000/abRANDOMcd
    res.send('abcd');
}) 


app.listen(5000);

///////////////////////////////////////////////////////////////////////////////////


///some points :from 36:40 to check till 36:47
// get http verb  sends 200 but as browser caches the data thats why 304 is being shown on the page's network tab of inspect element, whenever we reload

// issues with this thing: if we use get then it's call is cached thats hy we dont send password in calls of get
// we send password in calls of post


// For Password ///////////////

const express = require('express');  // express passes function definition which need to be passed in app i.e app will call express 
const { send } = require('process');
const app = express();

const checkAuth = (req, res, next)=>{
    console.log("in first" , req.query);       // output will be on node console
    if(req.query.auth === 'bdjedfrjnrktfrufce') {          // using === to stringify   // we get a url's query through.. req.query()
    next();                                   // next function
    }
    else {
        res.status(400).send("should be authorised");
    }
};

app.use(checkAuth);  // whatsoever middleware would be put here it will run in all apis

// all these below are routes

const sendRes = (req, res)=>{
    res.status(200);               
    res.json(req.query);
};

app.get('/', sendRes);

/// for sending password 
// by default below code wont be accepted by node i.e it will return empty {} in postman and undefined in nodejs console
// so we would be required to install body-parser in node

//command for installing :
// npm install --save body-parser

app.post('/', (req,res) =>{
    console.log('req.body-> ', req.body);
    res.json({text:req.body})
})

app.listen(5000);

////////////////////////////////////////

//using body parser for passwords:  // bodyParser is depreciated so below code might not work


const express = require('express');  // express passes function definition which need to be passed in app i.e app will call express 
const bodyParser = require("body-parser") // this thing goes to each middleware so that it could handle each post's call 
//const { send } = require('process');
const app = express();

const checkAuth = (req, res, next)=>{
    if(req.query.auth === 'bdjedfrjnrktfrufce') {          // using === to stringify   // we get a url's query through.. req.query()
    next();                                   // next function
    }
    else {
        res.status(401).send("should be authorised");
    }
};

app.use(bodyParser);  // whatsoever middleware would be put here it will run in all apis // we require body_parser so that what so ever data we are sending using forms we could get that


// all these below are routes

const sendRes = (req, res)=>{
    res.status(200);               
    res.json(req.query);
};

app.get('/', sendRes);

app.post('/', (req,res) =>{
    console.log('req.body-> ', req.body);
    res.json({text:req.body})  // whatsoever data we are sending that we get in req.body, form's raw data is being find here but we require body-parser for viewing it
})

app.listen(5000);

////////////////////////////////////////////////////////////


//using body parser for passwords for form data:


const express = require('express');  // express passes function definition which need to be passed in app i.e app will call express 
const bodyParser = require("body-parser") // this thing goes to each middleware so that it could handle each post's call 
const app = express();

const checkAuth = (req, res, next)=>{
    if(req.query.auth === 'bdjedfrjnrktfrufce') {          // using === to stringify   // we get a url's query through.. req.query()
    next();                                   // next function
    }
    else {
        res.status(401).send("should be authorised");
    }
};

app.use(bodyParser.urlencoded({ extended:true}));  // whatsoever middleware would be put here it will run in all apis // we require body_parser so that what so ever data we are sending using forms we could get that
app.use(bodyParser.json());                        // for json data 

// all these below are routes

const sendRes = (req, res)=>{
    res.status(200);               
    res.json(req.query);
};

app.get('/', sendRes);

app.post('/', (req,res) =>{
    console.log('req.body-> ', req.body);
    res.json({text:req.body})  // whatsoever data we are sending that we get in req.body, form's raw data is being find here but we require body-parser for viewing it
})

app.listen(5000);

//////////////////////////////////////////////////////////////

// when res.json and res.send both we need to do then it will throw error in the execution for sending data on node.js console

const express = require('express');  
const bodyParser = require("body-parser")
const app = express();

const checkAuth = (req, res, next)=>{
    if(req.query.auth === 'bdjedfrjnrktfrufce') {  // using === to stringify   // we get a url's query through.. req.query()
        console.log('1');
        next();                                   // next function due to this it will goto resSend function
    }
    console.log('2');
    res.status(401).send("should be authorised");  // here due to res.send and in next line res.json both will have conflict that ehich one need to be send
};

// all these below are routes

const sendRes = (req, res)=>{            
  //  res.json(req.query);                      // if uncomment this then it will show error  bcoz of confusions being created  and output wont be 1 inside 2
    console.log('inside');
};

app.get('/', sendRes);

app.post('/', (req,res) =>{
    console.log('req.body-> ', req.body);
    res.json({text:req.body}) 
})

app.listen(5000);


////////////////////////////////////////////////////////////


//as body parser is directly embedded in express so below code might work for passwords for form data:


const express = require('express');  // express passes function definition which need to be passed in app i.e app will call express 
const bodyParser = require("body-parser") // this thing goes to each middleware so that it could handle each post's call 
const app = express();

const checkAuth = (req, res, next)=>{
    if(req.query.auth === 'bdjedfrjnrktfrufce') {          // using === to stringify   // we get a url's query through.. req.query()
    next();                                   // next function
    }
    else {
        res.status(401).send("should be authorised");
    }
};

app.use(express.urlencoded());  // whatsoever middleware would be put here it will run in all apis // we require body_parser so that what so ever data we are sending using forms we could get that
app.use(express.json({ extended:true}));                        // for json data 

// all these below are routes

const sendRes = (req, res)=>{
    res.status(200);               
    res.json(req.query);
};

app.get('/', sendRes);

app.post('/', (req,res) =>{
    console.log('req.body-> ', req.body);
    res.json({text:req.body})  // whatsoever data we are sending that we get in req.body, form's raw data is being find here but we require body-parser for viewing it
})

app.listen(5000);

//////////////////////////////////////////////////////////////


//THA:

//http://expressjs.com/ : read till API Reference