//const fs = require('fs');
import fs from 'fs'

fs.readFile('output.txt','utf8',(err, data) => {
    //UTF-8 converts data into readable format; (err, data) 

    if(err) {
        console.log(err);
        return; //Stops the execution if there is an error
    }

    console.log(data.length);
    console.log(data);

   

    fs.writeFile('output.txt','playwright test passed',(err) => {
if(err){
    console.log(err);
    return;
}

console.log("File written succesfully");


});

 });






