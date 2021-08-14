// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

// promise is used mostly for asynchronous code

// promise declaration
var promise = new Promise(()=>{}); // it takes function as parameter  // this will return pending as state
console.log(promise);

// promise has three states: resolve, rejected, pending


// even if promise is not called still it will work here

var promise = new Promise(()=>{
    console.log("Hello World");
}); 
console.log("Hello");

// using resolve and reject as paramater

var promise = new Promise((resolve,reject)=>{
  let a = 1+1
  if(a === 2){
      resolve()
  }
  else{
      reject()
  }
}); 

console.log(promise);


// error handling

var promise = new Promise((resolve,reject)=>{
    let a = 1+1
    if(a === 2){
        resolve()
    }
    else{
        reject()
    }
  }); 
  
promise
.then(()=>{  // here resolve's code
    console.log("Promise was Resolved")
})
.catch(()=>{// here error would be handled
    console.log("Promise was Rejected");
})

// data could also be passed in resolve

var promise = new Promise((resolve,reject)=>{
    let a = 1+1
    if(a === 2){
        resolve("Success")
    }
    else{
        reject("Failed")
    }
  }); 
  
promise
.then((data)=>{  // here resolve's code
    console.log(data)
})
.catch((error)=>{// here error would be handled
    console.log(error);
})

// json data could also be passed

var promise = new Promise((resolve,reject)=>{
    let a = 1+1
    if(a === 2){
        resolve({
            "success":true
        })
    }
    else{
        reject({
            "success":false
        })
    }
  }); 
  
promise
.then(()=>{  // here resolve's code
    console.log("Promise was Resolved")
})
.catch(()=>{// here error would be handled
    console.log("Promise was Rejected");
})