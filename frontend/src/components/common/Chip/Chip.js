import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(0.5),
        },
      },
      Chip: {
        marginTop : theme.spacing(2),
      }
}));

const ChipCustom = ({children}) => {
    const classes = useStyles();

  
    return (
      <div className={classes.root}>
        <Chip label={children} color="primary" />

       </div>
    );
}

export default ChipCustom;