import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
  },
}));

const Button_custom = ({children}) => {

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<PlayCircleFilledRoundedIcon style={{ fontSize: 40 }}/>}
      >
        이벤트 바로 가기
      </Button>
    </div>
  );
}

export default Button_custom;