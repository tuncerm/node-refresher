const fs = require('fs');

const userName = 'Havoc';

fs.writeFile(`${userName}-data.txt`, 'Name: ' + userName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('WROTE FILE');
});
