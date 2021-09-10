import Item from './Item';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  control: {
  padding: theme.spacing(2),
  },
}));

const Competences = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item
            title="Gestion "
            content="Formation, dépannage, support, maj et migration des logiciels de gestions, et comptabilité Sage, Codial et EBP."
            image="https://media.istockphoto.com/photos/double-explosure-with-businesss-charts-of-graph-and-rows-of-coins-for-picture-id1051617040"
          />
        </Grid>
        <Grid item xs>
          <Item
            title="Commerce "
            content="Gestion de portefeuille clients, suivi de commandes fournisseurs/clients, devis, suivi des litiges/SAV, gestion des réceptions/livraisons et de stock. "
            image="https://media.istockphoto.com/photos/glad-to-work-with-you-picture-id951514270"
          />
        </Grid>
        <Grid item xs>
          <Item
            title="Support"
            content="Gestion des appels, call flow, suivi des dossiers client, traitement des tickets, 	diagnostique et dépannage. "
            image="https://image.shutterstock.com/image-photo/smiling-friendly-female-callcenter-agent-600w-1175066677.jpg"
          />
        </Grid>
        <Grid item xs>
          <Item
            title="Informatique"
            content="Windows, MacOS, Linux. MsOffice. Serveurs. SQL, PHP, CSS. Adobe."
            image="https://as1.ftcdn.net/jpg/02/25/56/76/500_F_225567663_gPfQuBNATBPkZO8KEGl256xPqURL6cbd.jpg"
          />
        </Grid>
        <Grid item xs>
          <Item
            title="World of warcraft"
            content="Chasseur lvl 120. Donjon, raid. Metiers : cuisine, peche travail du cuir et depessage au max !"
            image="https://as1.ftcdn.net/jpg/02/97/41/58/500_F_297415844_RQplmtTHNTNBJC8Mo2NbIfmUo9J7B1FT.jpg"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Competences
