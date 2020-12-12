import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = (theme) => ({
  session: {
    position: 'relative',
    zIndex: 4000,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    padding: `40px ${theme.spacing(1)}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 0 auto',
    flexDirection: 'column',
    minHeight: '100%',
    textAlign: 'center'
  },
  title: {
    fontSize: '150px',
    lineHeight: 1.2,
    fontWeight: 100,
    display: 'inline-table',
    position: 'relative',
    background: '#95B4CC',
    color: '#fff',
    padding: `0 ${theme.spacing(1) * 3}px`,
    borderRadius: '60px',
    cursor: 'pointer',
    margin: `0 0 ${theme.spacing(1)}px`,
    '&:after': {
      top: '100%',
      left: '50%',
      border: 'solid transparent',
      content: '""',
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderTopColor: '#95B4CC',
      borderWidth: '8px',
      marginLeft: '-8px'
    }
  },
  subtitle: {
    fontSize: '32px',
    fontWeight: 900
  }
});

class BackendError extends React.Component {

  render() {

    const {classes} = this.props;

    return (
        <div className={classes.session}>
          <div className={classes.content}>
            <Typography className={classes.title}>500</Typography>
            <Typography className={classes.subtitle}>
              We have an internal server error!
            </Typography>
          </div>
        </div>
    );
  }
}

export default withStyles(useStyles)(BackendError);
