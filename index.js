const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/temp', (req, res) => {
    const count = 5;
  
    // Generate some passwords
    const temp = [1,2,3,4,5]
    res.json(temp);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log(`Anime rec api listening on ${port}`);

