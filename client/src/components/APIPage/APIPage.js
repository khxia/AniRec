import React from 'react';
import Header from '../Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Prism from "prismjs";

import "../../prism.css";

const THEME = createMuiTheme({
    typography: {
      "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 16,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 400
    },
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#ee4466',
        },
        text: {
            secondary: '#ee4466'
        }
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
      margin: 'auto'
    }
  }));

  function APIPage() {
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
          API Documentation
        </Typography>
        <p>
          <Typography variant="body1" gutterBottom>
            This API is designed as a stateless protocol. Which means that all requests are anonymous, 
            and requests has no relation between each other. While this means that none of your user 
            data is stored, it does mean that you are responsible for maintaining state within your app.
          </Typography>
          <br />
          <Typography variant="body1" gutterBottom>View on <b><a href="https://github.com/khxia/AniRec">Github.</a></b></Typography>
          <br />
          <Typography variant="body1" gutterBottom><i>
          NOTE: The first request will likely have a substantial response time because this project is 
          deployed on a free Heroku dyno. Any subsequent requests will behave normally.
          </i></Typography>
          <br />
          <Typography variant="body1" gutterBottom>
            The base URL for all API endpoints:
          </Typography>
          <pre><code>{`https://ani-rec.herokuapp.com/api/`}</code></pre>
        </p>
        <br />
        <Typography variant="h6" component="h2" color='textSecondary'>
          Some Important Response Parameters
        </Typography>
        <pre><code>
            {`type
            The type of response. Currently, there are two types: ['question', 'anime']
            `}
        </code></pre>
        <pre><code>
            {`current_id
            The ID of the response. Each question or anime has a unique ID. 
            Use this ID to identify the current question in the "/recommender/next" endpoint. 
            `}
        </code></pre>
        <pre><code>
            {`question
            The question content in String format.
            This is only specified if the response is of type 'question'.
            `}
        </code></pre>
        <pre><code>
            {`options
            An array of option objects that contains the option title, a next_id, and the type.
            Use the next_id to specify which option in the "/recommender/next" endpoint. 
            The next_id is always different from current_id.
            This is only specified if the response is of type 'question'.
            `}
        </code></pre>
        <pre><code>
            {`animes
            An array of anime objects that contains the anime name, the anime id, and a mal_id.
            This is only specified if the response is of type 'anime'.
            `}
        </code></pre>
        <pre><code>
            {`mal_id
            More IDs...
            This is the MyAnimeList ID number for the anime.
            `}
        </code></pre>
        <br />
        <Typography variant="h6" component="h2" color='textSecondary'>
          Endpoints
        </Typography>
        <Typography variant="body1" gutterBottom>
        <pre><code>{`GET   /recommender/start`}</code></pre>
        <ul>
          <li>Arguments: None</li>
          <li>Returns: 
            <ul>
                <li><i>type</i> (should always be of type 'question')</li>
                <li><i>question</i></li>
                <li><i>current_id </i> (should always be 0)</li>
                <li>An <i>options </i> array</li>
                <li><i>timestamp</i></li>
            </ul>
          </li>
          <li>Example request: <pre><code>{`https://ani-rec.herokuapp.com/api/recommender/start`}</code></pre></li>
        </ul>
        <br />
        <pre><code>{`GET   /recommender/next`}</code></pre>
        <ul>
          <li>Arguments
            <ul>
                <li>The ID of the current question</li>
                <li>The next_id of the option you want to select</li>
            </ul>
            </li>
          <li>Returns:
            <ul>
                <li>If the option results in a response of type 'question'
                <ul>
                    <li><i>type</i> (should always be of type 'question')</li>
                    <li><i>question</i></li>
                    <li><i>current_id</i></li>
                    <li>An <i>options </i> array</li>
                    <li><i>timestamp</i></li>
                </ul>
                </li>
                <li>If the option results in a response of type 'anime'
                <ul>
                    <li><i>type</i> (should always be of type 'anime')</li>
                    <li>An <i>animes </i> array</li>
                    <li><i>timestamp</i></li>
                </ul>
                </li>
            </ul>
            
          </li>
          <li>Example request: <pre><code>{`https://ani-rec.herokuapp.com/api/recommender/next?question=1&option=2`}</code></pre></li>
        </ul>
        <br />
        <pre><code>{`GET   /master_list`}</code></pre>
        <ul>
          <li>Arguments: None</li>
          <li>Returns: A gigantic array of all the animes used in this recommender.</li>
          <li>Example request: <pre><code>{`https://ani-rec.herokuapp.com/api/master_list`}</code></pre></li>
        </ul>
        </Typography>
        <br />
        <br />
      </div>
      </main>
    </Container>
    </React.Fragment>
    </MuiThemeProvider>
    );
}

export default APIPage;