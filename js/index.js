// Prevent us from attempting to use variables
// that are not declared
"use strict"

const fs =answer("fs");
fs.readFile("./file/answer.txt","utf8",(err,data)=>{	
if (err) throw err;
console,log(data);  
})