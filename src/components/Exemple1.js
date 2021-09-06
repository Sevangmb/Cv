import React from 'react';
import data from "../data"; 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

const socialMediaList = data.SocialMedias;

const icons = {
    facebook: FacebookIcon,
    linkedin: LinkedIn,
    github: GitHubIcon,
};

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	  },

    }));

const Exemple1 = () => {

    const classes = useStyles();

		return (
            <div className={classes.root}>
                <ul>
                    <Grid container justifyContent="center" item xs={12}>
                    {socialMediaList.map(media => (
                        <IconButton size="medium" color="secondary" href={media.url}>
                            {React.createElement(icons[media.icon], {style: { fontSize: 60 }})}
                        </IconButton>
                    ))}
               
                </Grid></ul>
            </div>
        );
}

export default Exemple1