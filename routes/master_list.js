const express = require('express');
const router = express.Router();

const app = express();

const { MongoClient } = require("mongodb");

// const uri = process.env.MONGODB_URI;

const uri = "mongodb+srv://user_alex:jqPQRYjIaagUCv5b@anime-database.qz4ri.mongodb.net/<dbname>?retryWrites=true&w=majority";

router.get('/', async (req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {

        await client.connect();

        const database = client.db('animelist');

        const collection = database.collection('anime_dict');

        const cursor = collection.find();
        let ret_arr = [];
        if (cursor) {
            console.log(cursor);
            await cursor.forEach( (entry) => {
                ret_arr.push({
                    name: entry.name,
                    id: entry.id
                })
            });
            res.status(200).send(ret_arr);
        }
        else {
            res.status(204).send(ret_arr);
        }

    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
    finally {
        await client.close()
    }
});

module.exports = router;