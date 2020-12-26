const express = require('express');
const path = require('path');

const app = express();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/temp', (req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
        await client.connect()
        const databse = client.db('animelist');
        const collection = database.collection('anime_dict');

        const query = collection.find( {"id": "111"} )
        return query;
    } catch(err) {
        console.log(err)
    }
    finally {
        await client.close()
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 9000;
app.listen(port);

console.log(`Anime rec api listening on ${port}`);

