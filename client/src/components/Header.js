import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import logo from '../logo.svg';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    color: `#ee4466`,
    textDecoration: `none`,
    fontWeight: `300`,
    fontStyle: `italic`,
  },
  toolbarSecondary: {
    justifyContent: 'flex-end',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
      <img src={logo} alt="React Logo" style={{
        paddingRight: '10px',
        width: '50px'
      }}/>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="left"
          noWrap
          className={classes.toolbarTitle}
        >
          <i>{title}</i>
        </Typography>
        {sections.map((section) => (
          <Button
            variant="outlined" size="small" href={section.url} style={{
              margin: '5px'
            }}
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};