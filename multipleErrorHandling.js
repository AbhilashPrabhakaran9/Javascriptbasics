function createJson() {
try {
    //let data = JSON.parse("{id:01}");
    //console.log(x);

    const school = '{"Name": "xyz","Location": "abcd"}'
    const data = JSON.parse(school);

    console.log(data);
}

catch(err){
    if(err instanceof SyntaxError){
        console.log("Syntax error occured");
    }

    else if(err instanceof ReferenceError){

         console.log("Reference error occured");

    }
}

}

createJson();
