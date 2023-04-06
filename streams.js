const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', (chunk) => {    
    console.log("---New Chunk---");
    writeStream.write(chunk);
    writeStream.write('\nNew Chunk\n');
})

// pipoing (from read stream to write stream)
readStream.pipe(writeStream);