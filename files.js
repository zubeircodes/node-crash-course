const fs = require('fs');

// read file
// fs.readFile('./docs/blog.txt', (err, data)=>{
//  if(err) {
//      console.log(err);
//  }
//  console.log(data.toString());
// });

// console.log("last line");

// writing files --> if file doesn't exist, node creates the file 
// fs.writeFile("./docs/blog.txt", "hello world", () => {
//     console.log("file was written");
// })

// directory
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//     console.log('folder created');
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }

//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
  fs.unlink('./docs/deleteme.txt', (err) => {
      if(err) {
        console.log(err);
        }
      console.log('file deleted');
    })
}