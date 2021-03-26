import React from 'react';
import AnimeList from './AnimeList';
import Header from '../Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const THEME = createMuiTheme({
    typography: {
      "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 16,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 400
    },
  });

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Anime List', url: '/anime-list' },
  { title: 'API', url: '/api' }
];

const useStyles = makeStyles((theme) => ({
    sectionContainer: {
      width: '80%',
      margin: 'auto'
    }
  }));

function AnimeListPage() {
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
          Anime List
        </Typography>
        <p>
          <Typography variant="body1" gutterBottom>
            This table contains all the <b>212</b> animes that are included in this recommender
          </Typography>
        </p>
        <AnimeList />
      </div>
      </main>
    </Container>
    </React.Fragment>
    </MuiThemeProvider>
    );
}

export default AnimeListPage;