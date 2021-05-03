const fs = require("fs");
const path = require("path");

module.exports = {
    getAllFiles: (dirPath, arrayOfFiles) => {
       
        files = fs.readdirSync(dirPath);

        arrayOfFiles = arrayOfFiles || [];

        files.forEach(function(file) {
            
            if (fs.statSync(dirPath + "/" + file).isDirectory()) {
                arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
            } else {
            arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
            }
        })

        return arrayOfFiles;
    },
};

//const result = getAllFiles("./recipes");
//console.log(result);

/* var filepath = './recipes/file1.txt'

fs.access(filepath, fs.F_OK, (err) => {
  if (err) {
    console.error(err)
    return
  }

//console.log("file exists");

})

*/

//console.log(process.argv[2]);
//console.log(process.argv[3]);
//console.log(process.argv[4]);





