const fs = require('fs');

fs.readdir('/home/', (err, dirs)=> {
  dirs.forEach((dir)=> {
    if (dir !== 'dsoper') {
      console.log(dir); 
    } 
  });
});
