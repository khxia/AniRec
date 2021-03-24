import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Recommender from './components/Recommender/Recommender';

const THEME = createMuiTheme({
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 16,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 400
  }
});

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Anime List', url: '/anime-list' },
  { title: 'API', url: '/api' }
];

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    width: '80%',
    margin: 'auto',
    paddingBottom: '50px'
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={THEME}>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="AniRec | Anime Recommender API" sections={sections} />
      <main>
      <div className={classes.sectionContainer}>
        <Typography variant="h4" component="h2">
          Welcome to AniRec
        </Typography>
        <p>
          <Typography variant="body1" gutterBottom>
            If you've ever wanted to watch an anime but don't know what's good,
            you've come to the right place. This recommender will ask you a series of questions about the 
            type of anime that you want to watch. Answer them truthfully and you will discover
            another great anime! Whether or not this is your first anime or hundredth, 
            hopefully this will be a useful tool for you. 
          </Typography>
        </p>
        <p>
          <Typography variant="body1" gutterBottom>
            The recommendations for this anime are based 
            heavily on this <a href="https://imgur.com/gallery/q9Xjv4p">flowchart</a> (that I don't take credit 
            for) with a bit of 
            my personal recommendations. If you want a rough top-level view of the recommender, please 
            check it out.
          </Typography>
        </p>
        <p>
          <Typography variant="body1" gutterBottom>
            If you want to incorporate this recommender into your own apps, check out the <a 
            href="/api">API</a> for AniRec.
          </Typography>
        </p>
        <br />
        <Typography variant="h4" component="h2">
          Recommender
        </Typography>
        <br/>
        <Recommender />
      </div>
      </main>
      </Container>
    </React.Fragment>
    </MuiThemeProvider>
  );
}

export default Home;
