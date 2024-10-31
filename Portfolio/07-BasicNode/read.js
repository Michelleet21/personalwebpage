const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'text.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    console.log('Message:', data);
});
