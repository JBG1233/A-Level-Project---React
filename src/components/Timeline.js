import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import {infoColor, warningColor} from "../styleVariables";
import axios from "axios";
import {compose} from "redux";
import {connect} from "react-redux";
import {HowitworksTrue, QuestionManagerTrue, UpdateQuestionState} from "../redux/actions";

const useStyles = theme => ({
  timeline: {
    '&::before': {
      position: 'absolute',
      top: '6px',
      width: '4px',
      height: '100%',
      content: '""',
      backgroundColor: 'LightBlue',
      left: '4px',
      [theme.breakpoints.up('lg')]: {
        left: '33%',
        marginLeft: '-2px'
      }
    },
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1) * 2
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1) * 3
    }
  },
  timeline2: {
    '&::before': {
      position: 'absolute',
      top: '6px',
      width: '4px',
      height: '100%',
      content: '""',
      backgroundColor: 'LightBlue',
      left: '4px',
      [theme.breakpoints.up('lg')]: {
        left: '68%',
        marginLeft: '-2px'
      }
    },
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1) * 2
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1) * 3
    }
  },
  timeline3: {
    '&::before': {
      position: 'absolute',
      top: '6px',
      width: '4px',
      height: '100%',
      content: '""',
      backgroundColor: 'LightBlue',
      left: '4px',
      [theme.breakpoints.up('lg')]: {
        left: '55%',
        marginLeft: '-2px'
      }
    },
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1) * 2
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1) * 3
    }
  },
  icon: {
    backgroundColor: 'Orange',
    position: 'absolute',
    top: '15px',
    width: '12px',
    height: '12px',
    textAlign: 'center',
    borderRadius: '50%',
    left: '0',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '2px',
      left: '2px',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: theme.palette.background.paper
    },
    [theme.breakpoints.up('lg')]: {
      left: '33%',
      marginLeft: '-6px'
    }
  },
  icon2: {
    backgroundColor: 'Orange',
    position: 'absolute',
    top: '15px',
    width: '12px',
    height: '12px',
    textAlign: 'center',
    borderRadius: '50%',
    left: '0',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '2px',
      left: '2px',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: theme.palette.background.paper
    },
    [theme.breakpoints.up('lg')]: {
      left: '68%',
      marginLeft: '-6px'
    }
  },
  icon3: {
    backgroundColor: 'Orange',
    position: 'absolute',
    top: '15px',
    width: '12px',
    height: '12px',
    textAlign: 'center',
    borderRadius: '50%',
    left: '0',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '2px',
      left: '2px',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: theme.palette.background.paper
    },
    [theme.breakpoints.up('lg')]: {
      left: '55%',
      marginLeft: '-6px'
    }
  },
  card: {
    position: 'relative',
    margin: '40px 0',
    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both'
    },
    '&:first-child': {
      marginTop: 0
    }
  },
  button: {
    left: '-17%'
  },
  button2: {
    right: '-17%',
  },
  button3: {
    left: '5%',
  },
  content: {
    position: 'relative',
    marginLeft: '30px',
    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both'
    },
    [theme.breakpoints.up('lg')]: {
      width: '47%',
      marginLeft: 0
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '30px'
    }
  },
  date: {
    cursor: 'pointer',
    display: 'inline-block',
    padding: '4px 0 10px',
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      top: '7px',
      width: '100%',
      left: '75%'
    },
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: 0,
      width: '100%',
      left: 'auto'
    }
  },
  date2: {
    cursor: 'pointer',
    display: 'inline-block',
    padding: '4px 0 10px',
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      top: '7px',
      width: '100%',
      left: '150%'
    },
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: 0,
      width: '100%',
      left: 'auto'
    }
  },
  date3: {
    cursor: 'pointer',
    display: 'inline-block',
    padding: '4px 0 10px',
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      top: '7px',
      width: '100%',
      left: '123%'
    },
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: 0,
      width: '100%',
      left: 'auto'
    }
  },
  contentOdd: {
    [theme.breakpoints.up('lg')]: {
      float: 'right'
    }
  },
  dateOdd: {
    [theme.breakpoints.up('lg')]: {
      cursor: 'pointer',
      right: '150%',
      left: 'auto',
      textAlign: 'right'
    }
  },
  dateOdd2: {
    [theme.breakpoints.up('lg')]: {
      cursor: 'pointer',
      right: 'auto',
      left: '-74%',
      textAlign: 'right'
    }
  },
  dateOdd3: {
    [theme.breakpoints.up('lg')]: {
      cursor: 'pointer',
      right: 'auto',
      left: '-104%',
      textAlign: 'right'
    }
  },
  contentEven: {
    [theme.breakpoints.up('lg')]: {
      float: 'left'
    }
  },
  contentEven2: {
    [theme.breakpoints.up('lg')]: {
      float: 'right'
    }
  },
  bodyEven: {
    [theme.breakpoints.up('lg')]: {
      float: 'right',
      '&::before': {
        position: 'absolute',
        right: 'auto',
        left: '33%',
        borderColor: `transparent transparent transparent ${theme.palette.divider}`
      },
      '&::after': {
        position: 'absolute',
        right: 'auto',
        left: '33%',
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`
      }
    }
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  success: {
    backgroundColor: theme.palette.secondary.main
  },
  info: {
    backgroundColor: infoColor
  },
  warning: {
    backgroundColor: warningColor
  },
  danger: {
    backgroundColor: theme.palette.error.main
  }
});

class Timeline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dates: [
        {
          date: '20th Century',
        },
        {
          date: '19th Century',
        },
        {
          date: '18th Century',
        },
        {
          date: '17th Century',
        },
        {
          date: '16th Century',
        },
        {
          date: '15th Century',
        },
        {
          date: '14th Century',
        },
      ]
    }
  }

  changeComponent(groupId, index) {
    let newGroupId;
    if (index === 0) {
      newGroupId = groupId + '1900H'
    } else if (index === 1) {
      newGroupId = groupId + '1800H'
    } else if (index === 2) {
      newGroupId = groupId + '1700H'
    } else if (index === 3 ) {
      newGroupId = groupId + '1600H'
    } else if (index === 4 ) {
      newGroupId = groupId + '1500H'
    } else if (index === 5 ) {
      newGroupId = groupId + '1400H'
    } else if (index === 6 ) {
      newGroupId = groupId + '1300H'
    }

    axios({
      method: 'GET',
      url: this.props.apiHost + '/rest/questions/' + newGroupId,
    })
        .then(response => {
          if (response.status === 200) {
            this.props.UpdateQuestionState(response.data, newGroupId)
            this.props.QuestionManagerTrue()
          }
        }).catch(error => {
    })
  }

  render() {

    const {classes} = this.props;

    return (
        <div>
          <div  style={{display: 'inline-block', minWidth: '30%'}} className={classes.timeline}>
                    {"American History" && (
                        <div className={classNames(classes.card, 'text-lg-center')}>
                          <Button variant="contained" color="primary" className={classes.button} onClick={()=> this.props.HowitworksTrue()}>
                            {"American History"}
                          </Button>
                        </div>
                    )}
                    {this.state.dates.map((item, index) => (
                        <div key={index} className={classes.card}>
                          <div className={classes.icon}/>
                          <section className={classNames(classes.content, index % 2 ? classes.contentOdd : classes.contentEven)}>
                            <Typography onClick={()=> this.changeComponent("AMERICA", index)}   variant="body1" component="div" className={classNames(classes.date, index % 2 ? classes.dateOdd : classes.dateEven)}>
                              {item.date}
                            </Typography>
                          </section>
                          <div className={classes.card}>
                            <div className={classNames(classes.bgDanger)} style={{top: 0}}/>
                          </div>
                        </div>
                        ))
                      }
          </div>
          <div  style={{display: 'inline-block', minWidth: '25%'}} className={classes.timeline3}>
            {"European History" && (
                <div className={classNames(classes.card, 'text-lg-center')}>
                  <Button variant="contained" color="primary" className={classes.button3} onClick={()=> this.props.HowitworksTrue()}>
                    {"European History"}
                  </Button>
                </div>
            )}
            {this.state.dates.map((item, index) => (
                <div key={index} className={classes.card}>
                  <div className={classes.icon3}/>
                  <section className={classNames(classes.content, index % 2 ? classes.contentOdd : classes.contentEven)}>
                    <Typography onClick={()=> this.changeComponent("EUROPE", index)} variant="body1" component="div" className={classNames(classes.date3, index % 2 ? classes.dateOdd3 : null)}>
                      {item.date}
                    </Typography>
                  </section>
                  <div className={classes.card}>
                    <div className={classNames(classes.bgDanger)} style={{top: 0}}/>
                  </div>
                </div>
            ))
            }
          </div>
          <div style={{display: 'inline-block', minWidth: '33%', float: 'right'}} className={classes.timeline2}>
            {"Asian History" && (
                <div className={classNames(classes.card, 'text-lg-center')}>
                  <Button variant="contained" color="primary" className={classes.button2} onClick={()=> this.props.HowitworksTrue()}>
                    {"Asian History"}
                  </Button>
                </div>
            )}
            {this.state.dates.map((item, index) => (
                <div key={index} className={classes.card}  >
                  <div className={classes.icon2}/>
                  <section className={classNames(classes.content, index % 2 ? classes.contentOdd : classes.contentEven)}>
                    <Typography onClick={()=> this.changeComponent("ASIA", index)} variant="body1" component="div" className={classNames(classes.date2, index % 2 ? classes.dateOdd2 : null)}>
                      {item.date}
                    </Typography>
                  </section>
                  <div className={classes.card}>
                  </div>
                </div>
            ))}
        </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    apiHost: state.serverDetails.apiHost
  }
}

const mapDispatchToProps = {QuestionManagerTrue, UpdateQuestionState, HowitworksTrue}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(Timeline);
