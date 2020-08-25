import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames/bind';
import styles from './Grid3.scss';


const cx = classNames.bind(styles);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Grid3 = () => {
  const classes = useStyles();

  function BookImage() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
           <img className={cx('image')} src="https://www.sigongsa.com/filedata/book/SB006706/detail_SB006706.jpg" alt="alice_die"/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <img className={cx('image')} src="https://www.sigongsa.com/filedata/book/SB005607/detail_SB005607.jpg" alt="alice_die"/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
           <img  className={cx('image')} src="https://www.sigongsa.com/filedata/book/SB000848/detail_SB000848.jpg" alt="alice_die"/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
           <img className={cx('image')} src="https://img.ridicdn.net/cover/862000677/xxlarge" alt="alice_die"/>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  function BookDate() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}>8/17</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>8/24</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>8/31</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>9/7</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  function BookName() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}>픽윅 클럽 여행기</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>앨리스 죽이기</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>이상한 나라의 앨리스</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>이성과 감성</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} >
          <BookImage />
        </Grid>
        <Grid container item xs={12}>
          <BookDate />
        </Grid>
        <Grid container item xs={12}>
          <BookName />
        </Grid>
      </Grid>
    </div>
  );
}

export default Grid3;