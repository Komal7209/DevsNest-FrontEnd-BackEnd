// here logged data will be shown
fetch('https://api.github.com/user/Shashank9988')
.then(data=>console.log(data))   // as fetch returns promise so thats why we are using .then


// if want to convert this data in json

fetch('https://api.github.com/user/Komal7209')
.then(res=>res.json())   // as json also returns promise so we require .then for res also
.then(data=> console.log(data))  // now the data will be in the form of json // here data is an object


fetch('https://api.github.com/user/Komal7209')
.then(res=>res.json())   // as json also returns promise so we require .then for res also
.then(data=> console.log(data.bio))  // now the data will be in the form of json // here data is an object

/////////////////////////////////////////
//////////////////////////
///////////////
////////////
/////////
////////
///
//

// async await

async function hello(){ // due to async this function becomes asynchronous
    const res = await fetch('https://api.github.com/user/Komal7209')   // due to await it waits for the response
    console.log(res);
}
var a = hello();

// instead of await we could do this

async function hello(){ // due to async this function becomes asynchronous
    const res = fetch('https://api.github.com/user/Komal7209') 
    res.then(data =>console.log(data))  // as we hadnt used await earlier so we could either directly print response by this
    console.log(res);
}
var a = hello();

// passing input and output

async function getData(username){ // due to async this function becomes asynchronous
    const res = fetch('https://api.github.com/user/${username}') 
    const data = await res.json()
    console.log(data);
}
var a = getData("Komal7209");


// for linking with html page
// if add a button load on html page

const btn = document.querySelector('button')


async function getData(username){ // due to async this function becomes asynchronous
    const res = await fetch('https://api.github.com/user/${username}')  // fetch returns promise and we store that data in res
    const data = await res.json() // now res is object and we store promise's data by await in data, due await promise is converted to data
    return data;
}

btn.addEventListener('click', ()=>{

})

var a = getData("Komal7209");
console.log(a)

// for linking with html page
// if add a button load on html page
// for giving functionality to button

const btn = document.querySelector('button')


async function getData(username){ // due to async this function becomes asynchronous
    const res = await fetch('https://api.github.com/user/${username}')  // fetch returns promise and we store that data in res
    const data = await res.json() // now res is object and we store promise's data by await in data, due await promise is converted to data
    return data;
}

btn.addEventListener('click', async()=>{
let response = getData("Komal7209");
let user = await response;
console.log(user);
})

// getting input from user
const btn = document.querySelector('button')
const input = document.querySelector('input')//


async function getData(username){ // due to async this function becomes asynchronous
    const res = await fetch('https://api.github.com/user/${username}')  // fetch returns promise and we store that data in res
    const data = await res.json() // now res is object and we store promise's data by await in data, due await promise is converted to data
    return data;
}

btn.addEventListener('click', async()=>{
const username = input.value; //
let response = getData(username);
let user = await response;
console.log(user);
})


//////////////

//browser catching

//browser checkc catch which is local storgae then that local storage checks the server and then data is being fetched from server
// there is time limit of cache and we can modify that time limit in our website 

///////////
//////////
////

// callback acts as recursion that we have callbacks inside callbacks thats why promise is more preferred

/////
///
//

//posting data to discord

const btn = document.querySelector('button')

btn.addEventListener('click', async()=>{
    fetch('',{
        method: 'post',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({content:"Hello World!"})
    }).then(res=> res,json())
    .then(res=> console.log(res));
})
