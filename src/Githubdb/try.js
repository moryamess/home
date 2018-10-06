var githubDB = require('./index')


var g=new githubDB('hostingIO','newentry4.json');


// g.getFileDetails().then((res)=>{

//     console.log(res)
// })


g.createFile({"mail":"belsarerohit81@gmail.com"},"This should be the message").then((res)=>{

    console.log(res)
});