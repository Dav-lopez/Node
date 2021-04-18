const fs = require('fs');
//const http = require ('https');
const fetch = require('node-fetch');

// fetching data from JSON Placeholder post

let url = "http://jsonplaceholder.typicode.com/posts";

let settings = { method: "Get" };

 fetch(url, settings)
    .then(res => res.json())
    .then(json=> { fs.writeFile("./result/post.json", JSON.stringify(json), err => {
        // Check file writing operation status
        if (err) throw err;
        // Log status of wiriting operation to console
        console.log("File writing is done successfully")
    })}
    );


    // to write file to post.json 

    /*fs.writeFile("./result/post.js", JSON.stringify(Data), err => {

    })*/

   