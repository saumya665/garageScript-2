const fs = require('fs');
const express = require('express');
const app = express();

app.listen('4011', ()=> {
  console.log('listening on port 4011');
});

app.get('/', (req, res)=> {
  const users = [];
  fs.readdir('/home/', (err, dirs)=> {
    dirs.forEach((dir)=> {
      if (dir !== 'dsoper') {
        users.push(dir);
      } 
    });
    res.send(users);
  });
});
