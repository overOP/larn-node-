//custom module
//require the module
const lastName = require('./app.js');
const fuestName = 'Pradeep';//we call the module
console.log(`Hello ${fuestName}!`);
console.log(`Your last name is ${lastName}`);

//built-in module
//file system module 
//common use of fs module
const fs = require('fs');

//synchronous method
//In synchronous method the code will be executed line by line

fs.writeFileSync('hello.txt', 'Hello from Node.js');
const data = {
    name: 'Pradeep',
    age: 23
}
fs.writeFileSync('data.json', JSON.stringify(data));

//asynchronous method
              //multiple files can be written
//sync method              
              //single file can be written             
//async method
const path = "over.txt";
fs.writeFile(path, 'OverPradeep', (err) => {
    if(err) throw err;
    console.log('File written successfully');
});

                                                               //for error handling
                                                               const a = 10;
                                                               if(a === 10){
                                                                    console.log('a is 10');
                                                               }else{
                                                                    throw new Error('a is not 10');
                                                               }                                                           
// //read file
fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

                                    //mkdir
                                    const folderPath = 'newDir';
                                    const filePath = `${folderPath}/hello.txt`;
                                    fs.mkdir(folderPath, { recursive: true }, (err) => {
                                        if (err) throw err;
                                        fs.writeFile(filePath, 'Hello from Node.js', (err) => {
                                            if (err) throw err;
                                            console.log('File written successfully');
                                        });
                                    });
//delete file
// fs.unlink(filePath, (err) => {
//     if (err) throw err;
//     fs.rmdir(folderPath, { recursive: true }, (err) => {
//         if (err) throw err;
//         console.log('Folder deleted successfully');
//     });
// }) 

//rename file
fs.rename(filePath, `${folderPath}/hi.txt`, (err) => {
    if (err) throw err;
    console.log('File renamed successfully');
});

//append file
fs.appendFile(filePath, '\nHello from Node.js', (err) => {
    if (err) throw err;
    console.log('File appended successfully');
});

//delete folder
// fs.rmdir(folderPath, { recursive: true }, (err) => {
//     if (err) throw err;
//     console.log('Folder deleted successfully');
// });


