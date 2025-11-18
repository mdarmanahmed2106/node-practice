const fs=require('fs')
const zlib=require('zlib')

//create read compressed file
const readStream=fs.createReadStream('example.txt.gz')

//create write stream 
const writeStream=fs.createWriteStream('Decompressed_example.txt')


const gunzip=zlib.createGunzip()

//pipe: read >decompress>write
readStream.pipe(gunzip).pipe(writeStream)
console.log('file is decompressed')