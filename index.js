const express = require('express');
const path = require('path');

const app = express();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/temp', async (req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {

        await client.connect();

        const database = client.db('animelist');

        const collection = database.collection('anime_dict');

        // const query = collection.find( {"id": "111"} );

        const result = await collection.findOne( {"id": "111"} );
        if (result) {
            console.log(result);
            return res.json(result);
        }
        else {
            console.log("ERROR");
        }

        return 0;
    } catch(err) {
        console.log(err)
    }
    finally {
        await client.close()
    }
});

app.use('/api/recommender', require('./routes/start'));

app.use('/api/master_list', require('./routes/master_list'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 9000;
app.listen(port);

console.log(`Anime rec api listening on ${port}`);

