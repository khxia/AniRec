const question_list = require('../source/questions.js');
const similar_animes = require('../source/data/similar_anime_dict.js');
const express = require('express');
const router = express.Router();
const anime_dict = require('../source/data/anime_dict.js');
const mal_dict = require('../source/data/mal_dict.js');
const doMongo = false;
const app = express();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

router.get('/start', async (req, res) => {
    try {
        const question = question_list[0].get_question();
        const options = question_list[0].get_all_options();
        let ret_opts = [];
        for (let i = 0; i < options.length; i++) {
            const n_type = options[i][1] === 0 ? 'anime' : 'question';
            ret_opts.push({
                option: options[i][0],
                next_type: n_type,
                next_id: i
            })
        }
        const currentdate = new Date(); 
        let datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        const ret_obj = {
            type: "question",
            question: question,
            current_id: 0,
            options: ret_opts,
            time_stamp: datetime
        }
        return res.json(ret_obj);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
})

router.get('/next', async (req, res) => {
    const question_id = req.query.question;  //question id
    const option = req.query.option;      //next_id
    if (question_id == null || option == null) {
        res.status(400).send("Did not specify the required arguments.");
    }
    if (question_id < 0 || question_id >= question_list.length) {
        res.status(400).send("This question id is invalid.");
    }
    const question = question_list[question_id];
    if (option < 0 || option >= question.options.length) {
        res.status(400).send("This option id is invalid.");
    }
    const opt = question.get_single_option(option);
    const id_int = opt[2];
    const currentdate = new Date(); 
    let datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
    if (opt[1] === 1) {
        const next_q = question_list[id_int].get_question();
        const next_opts = question_list[id_int].get_all_options();
        let ret_opts = [];
        for (let i = 0; i < next_opts.length; i++) {
            const n_type = next_opts[i][1] === 0 ? 'anime' : 'question';
            ret_opts.push({
                option: next_opts[i][0],
                next_type: n_type,
                next_id: i
            })
        }
        const ret_obj = {
            type: "question",
            question: next_q,
            current_id: id_int,
            options: ret_opts,
            time_stamp: datetime
        }
        return res.json(ret_obj);
    }
    else {
        if (doMongo) {
            const client = new MongoClient(uri, { useUnifiedTopology: true });
        }
        try {
            let result;
            if (doMongo) {
                await client.connect();
                const database = client.db('animelist');
                const collection = database.collection('anime_dict');
                result = await collection.findOne( { "id": String(id_int) } );
            }
            else {
                result = { 
                    name: anime_dict[id_int],
                    id: id_int,
                    mal_id: mal_dict[id_int]
                }
            }
            const a_list = [{
                name: result.name,
                id: result.id,
                mal_id: mal_dict[result.id]
            }];
            if (result) {
                if (id_int in similar_animes) {
                    const sim_list = similar_animes[id_int];
                    for (one_id of sim_list) {
                        let ex_res;
                        if (doMongo) {
                            ex_res = await collection.findOne( { "id": String(one_id) } );
                        }
                        else {
                            ex_res = { 
                                name: anime_dict[one_id],
                                id: one_id,
                                mal_id: mal_dict[one_id]
                            }
                        }
                        if (ex_res) {
                            a_list.push({
                                name: ex_res.name,
                                id: ex_res.id,
                                mal_id: mal_dict[ex_res.id]
                            })
                        }
                    }
                }
                const ret_obj = {
                    type: "anime",
                    animes: a_list,
                    time_stamp: datetime
                }
                return res.json(ret_obj);
            } else {
                res.status(500).send("Error occured when querying from database.");
            }
        } catch(err) {
            console.log(err);
            res.status(500).send(err);
        }
        finally {
            await client.close();
        }
    }
})

router.get('/random', async (req, res) => {
    const random_i = Math.floor(Math.random()*(150));
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    const currentdate = new Date(); 
    let datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
        try {
            await client.connect();
            const database = client.db('animelist');
            const collection = database.collection('anime_dict');
            const result = await collection.findOne( { "id": String(random_i) } );
            const a_list = [{
                name: result.name,
                id: result.id,
                mal_id: mal_dict[result.id]
            }];
            if (result) {
                if (random_i in similar_animes) {
                    const sim_list = similar_animes[random_i];
                   for (one_id of sim_list) {
                        const ex_res = await collection.findOne( { "id": String(one_id) } );
                        if (ex_res) {
                            a_list.push({
                                name: ex_res.name,
                                id: ex_res.id,
                                mal_id: mal_dict[ex_res.id]
                            })
                        }
                    }
                }
                const ret_obj = {
                    type: "anime",
                    animes: a_list,
                    time_stamp: datetime
                }
                return res.json(ret_obj);
            } else {
                res.status(500).send("Error occured when querying from database.");
            }
        } catch(err) {
            console.log(err);
            res.status(500).send(err);
        }
        finally {
            await client.close();
        }
    
})

module.exports = router;