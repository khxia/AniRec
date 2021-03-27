import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

import mal_icon from './mal_icon.png'

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
        width: 225
    },
    media: {
        width: 225,
        height: 314,
        borderRadius: '5%'
    },
    tags: {
        fontSize: 12,
    },
    cardContent: {
        textAlign: 'left',
        padding: '12px 16px 4px'
    },
    malIcon: {
        borderRadius: "50%"
    },
    cardActions: {
        alignItems: 'center',
        padding: '8px',
        display: 'block'
    },
    cardHeader: {
        padding: '4px 8px 8px'
    },
    resetButton: {
        padding: '5px'
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

    const onClickReset = () => {
        fetch('/api/recommender/start').then( (response) => response.json()).then( (resJson) => {
            if (resJson.type === "question") {
                setQuestion(resJson.question);
                setQuestionID(resJson.current_id);
                setContent(createOptionList(resJson.options));
            }
            else if (resJson.type === "anime") {
                setQuestion("Here are the results!")
                createAnimeList(resJson.animes).then((newGrid) => {
                    setContent(newGrid);
                })
            }
        })
    }

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

    const createAnimeList = async (animes) => {
        const animes_list = [];
        try {
            for (const anime of animes) {
                const res = await fetch(`https://api.jikan.moe/v3/anime/${anime.mal_id}`);
                const obj = await res.json();
                console.log(obj);
                let genre_str = "";
                for (const genre of obj.genres) {
                    genre_str = genre_str.concat(`${genre.name} `);
                }
                animes_list.push({
                    id: anime.id,
                    mal_id: anime.mal_id,
                    image: obj.image_url,
                    url: obj.url,
                    name: obj.title,
                    score: obj.score,
                    genre: genre_str,
                    episodes: obj.episodes
                })
            }
        }
        catch (e) {
            console.log(e);
        }
        return (
            <Grid container spacing={3}  direction="row" alignItems="flex-start"
            justify="center" className={classes.animeGrid}>
                {animes_list.map((anime, index) => {
                    return (
                        <Grid key={index} item xs>
                            <Card className={classes.animeCard}>
                                <CardHeader
                                  className={classes.cardHeader}
                                  title={
                                      <Typography variant="subtitle1" component="h6">
                                          <b>{anime.name}</b>
                                      </Typography>
                                    }
                                  subheader={
                                    <Typography variant="subtitle2" component="h6">
                                        <i>{`${anime.episodes} episodes`}</i>
                                    </Typography>
                                  }
                                />
                                <CardMedia
                                  className={classes.media}
                                  image={anime.image}
                                  title="cover photo"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography className={classes.tags} variant="body2">
                                        <b>Tags:</b> {anime.genre}
                                    </Typography>
                                    <Typography className={classes.tags} variant="body2">
                                        <b>MAL Score:</b> {anime.score}
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions} disableSpacing>
                                  <Link href={anime.url} target="_blank" rel="noreferrer">
                                      <img className={classes.malIcon} src={mal_icon} width="30" height="30"/>
                                  </Link>
                                </CardActions>
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
                createAnimeList(resJson.animes).then((newGrid) => {
                    setContent(newGrid);
                })
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
                createAnimeList(resJson.animes).then((newGrid) => {
                    setContent(newGrid);
                })
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
            <br/>
            <Button className={classes.resetButton} 
                onClick={onClickReset} variant="contained" size="small" >
            Reset</Button>
        </div>
    )
}

export default Recommender;