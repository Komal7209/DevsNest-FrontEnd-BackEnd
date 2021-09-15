// nodejs is scripting language

// it works inside a folder

//write:
node
and then console will turn to node

///////////////////////REPL (read, execute, print, loop )method/////////////////////////
////////////////////// by using this method we cant work in multiple files ////////////////////

//fs-> file system
> var fs = require("fs");
// require is used to access fs , analogous to import 
// 'fs' is already available module node.js
// node.js documentation could be consulted to check for all node modules 


///////////// we are using sync mode so that whole file is read in complete go then it is loaded
>fs.mkdirSync('day1);
// for making a new folder

/////write

>fs.fileWriteSync("day_1/hello.txt", "Hello", function(err){
    if(err){
        console.log(err);
    }
});
// for making new file , folder/filename , content , callback fn - throw error if any{if(err) then console.log(that error)}

//////update

>fs.appendFileSync("day_1/hello.txt", "appended");  // path, word to be appended // this also takes callback, but hadnt written here
// for appending the text

//////security, performance and edge cases

/////read

>fs.readFileSync("day_1/hello.txt");
<Buffer 48 65 6c 6c  6f 20 61 70 70 65 6e 64 65 64>  // this is being displayed after above command due to performance issue
// basically if we want to read the whole file then we will use above command but as the file could be of largfer size so thast why content is being stor in buffer and after that we need to convert that buffer ot readable file

>fs.readFileSync("day_1/hello.txt", "utf-8"); // this command will convert buffer to readable file
'Hello appended'

///storing in a variable

>var data = fs.readFileSync("day_1/hello.txt", "utf-8");
undefined  // wherever there is nothing being returned thats why undefined is coming up there

>console.log(data);
Hello appended
undefined

//////renaming
>fs.renameSync("day_1/hello.txt", "day_1/hello2.txt"); // file which need to be renamed , new name

//////Delete
// we cant delete whole folder at once if there are some files in interact
// thats why first we need to delete files in that folder then folder will be deleted

// for deleting file;
>fs.unlinkSync("day_1/hello2.txt);

// for deleting folder
>fs.rmdirSync('day_1);


>.exit 
// for exiting node

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
Here its different method
//////////////////////writing commands inside a file and executing them by node <file name>////////////////////////

make index.js file

/// content of index.js

var fs = require("fs");                          // imports file system
fs.mkdirSync("day_1");                          // makes folder
fs.writeFileSync("day_1/hello.txt" ,"Hello")   // makes file with hello.txt name i.e we have given path in first parameter then content of that appendFileSync

///////////////////////////creating varius files and running a particular file by using index.js file//////////////////////////////////


//////////content of index.js file:

var Test = require("./require_test");   // importing content of that file inside Test var  // T need to be capital because it is having content of class
var obj = new Test();                  // creating object of that class
var returned_val = obj.print();       // accessing functions of that class using obj object
console.log(returned_val);           // consoling the value of print fn

/////////content of require_test.js file:

class Test{
    print(){
        console.log("Inside require_test file");
    }
    abc(){}
    xyz(){}
}

class Test2{
    print(){
        console.log(">>>>>");
    }
}

module.exports = Test;   // only Test class will be exported


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////// How to read arguements in nodejs terminal ///////////////////////////////////////////////////////////////////////////

node index.js --create-dir day_2
