const add = require('./add.js');

const addTest = (a,b,c) => {
  if (add(a,b) === c) {
    console.log('omgosh it is true');
    return true; 
  }
  console.log('yikes! wrong sum');
  return false;
};

addTest(42, 9, 51);
