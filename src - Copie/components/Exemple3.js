import React from 'react';
import data from "../data"; 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '50px',
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      marginTop: '20px',
      color: theme.palette.text.secondary,
    },

}));

const Exemple3 = () => {

  const classes = useStyles();

		return (
            <div className={classes.root}>
                {
                  data.Skills.map((skill) => {
                    return (
                      <Grid container justifyContent="center" item xs={12}>
                        <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h3">{skill.Area}</Typography>
                        <ul>
                          {
                            skill.SkillSet.map((skillDetail) => {
                              return (
                                  
                                    <Typography variant="body1">{skillDetail.Name}</Typography>
                                  
                              );
                            })
                          }
                        </ul>
                        </Paper>
                        </Grid>
                    );
                  })
                } 
            </div>
        );
    }


export default Exemple3