import React from 'react';
import { Card,
         CardActionArea,
         CardMedia,
         CardContent,
         Typography,
         CardActions,
         Button }     from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    width: 345,
  },
  media: {
    height: 140,
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

const Item = ({ image, title, link, content }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
          link={link}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={title}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={link}>

          En savoir plus !
        </Button>
      </CardActions>
    </Card>
  );
};

Item.defaultProps = {
  title: 'Wow',
  content: 'It s amazing !',
  image: 'https://pixabay.com/images/id-5424776/',
};

Item.propTypes = {
	title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Item;
