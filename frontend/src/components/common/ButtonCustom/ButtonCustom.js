import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
    marginTop : theme.spacing(5),
  },
}));

const ButtonCustom = ({children}) => {

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<PlayCircleFilledRoundedIcon style={{ fontSize: 40 }}/>}
      >
        {children}
      </Button>
    </div>
  );
}

export default ButtonCustom;