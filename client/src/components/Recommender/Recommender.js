import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(() => ({
    container: {
        width: '80%',
        margin: 'auto',
        textAlign: 'center'
    },
    list: {
        margin: 'auto',
        width: '50%',
        marginTop: '20px'
    },
    listItem: {
        marginTop: '15px',
        marginBottom: '15px'
    },
    animeGrid: {
        marginTop: '20px'
    },
    animeCard: {
        width: "200px",
        height: "100"
    }
}));

function Recommender() {
    const classes = useStyles();
    const [ question, setQuestion ] = useState(""); 
    const [ questionID, setQuestionID ] = useState(0);
    const [ content, setContent ] = useState([]);
    const [ buttonPressed, setButtonPressed ] = useState(false);
    const [ selectedOption, setSelectedOption ] = useState(0);
    console.log('re-render');

    const onClickOption = (index) => {
        setSelectedOption(index);
        setButtonPressed(true);
    }
    
    const createOptionList = (options) => {
        return (
            <List component="ul" aria-label="options" className={classes.list}>
            {options.map((option, index) => {
                return (
                    <ListItem
                        button
                        onClick={() => onClickOption(index)}
                        className={classes.listItem}
                        key={index}
                    >
                    <ListItemText primary={option.option} />
                    </ListItem>
                )
            })}
            </List>
        )
    }

    const createAnimeList = (animes) => {
        return (
            <Grid container spacing={3}  direction="column" alignItems="center"
            justify="center" className={classes.animeGrid}>
                {animes.map((anime, index) => {
                    return (
                        <Grid key={index} item xs>
                            <Card className={classes.animeCard}>
                                <CardContent>
                                    <Typography variant="body1" gutterBottom>
                                        {anime.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
    useEffect(() => {
        fetch('/api/recommender/start').then( (response) => response.json()).then( (resJson) => {
            if (resJson.type === "question") {
                setQuestion(resJson.question);
                setQuestionID(resJson.current_id);
                setContent(createOptionList(resJson.options));
            }
            else if (resJson.type === "anime") {
                setQuestion("Here are the results!")
                setContent(createAnimeList(resJson.animes));
            }
        })
    }, []);

    useEffect(() => {
        if (buttonPressed) {
            fetch(`/api/recommender/next?question=${questionID}&option=${selectedOption}`)
            .then( (response) => response.json()).then( (resJson) => {
            if (resJson.type === "question") {
                setQuestion(resJson.question);
                setQuestionID(resJson.current_id);
                setContent(createOptionList(resJson.options));
            }
            else if (resJson.type === "anime") {
                setQuestion("Here are the results!");
                setContent(createAnimeList(resJson.animes));
            }
            setButtonPressed(false);
        })
        }
    }, [buttonPressed]);
    
    return (
        <div className={classes.container}>
            <Typography variant="h5">
              <i>{question}</i>
            </Typography>
            {content}
        </div>
    )
}

export default Recommender;