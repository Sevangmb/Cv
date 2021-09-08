import Item from './Item';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ombi from '../img/ombi.png';
import plex from '../img/plex.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Plex = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item 
            title="Ombi" 
            content="Ombi te permet de faire des demandes Plex. Ca ne t'empeche pas de m'appeler ;)" 
            image={ombi}
            link="https://nl5025.dediseedbox.com:62816"
          />
        </Grid>
        <Grid item xs>
          <Item 
            title="Plex" 
            content="Pedroflix, la seule VOD que tu aimes plus de votre maman !" 
            image={plex}
          />
          </Grid>

      </Grid>
    </div>
  );
}

export default Plex
