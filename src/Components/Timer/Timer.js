import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Counter from './components/Counter';
import Config from './constants/Config';

function getDefaultState() {
  return {
    isRunning : false,
    time      : 0  
  }
}

class Timer extends Component {

  constructor( props ) {
    super(props);
    this.state    = getDefaultState();
    this.timerRef = null;
  }

  static defaultProps = {
    startGame : false
  };

  updateTimer(extraTime) {
    const { time } = this.state;
    this.setState({ time : time + extraTime });
  }

  componentDidUpdate(prevProps) {
    if(this.props.startGame !== prevProps.startGame)
      if(!this.state.isRunning) {
        this.start();
      } else if(this.state.isRunning) {
        this.reset();
      }
  }

  start() {
    this.setState({
      isRunning : true
    }, () => {
      this.timerRef = setInterval(
        () => { this.updateTimer( Config.updateInterval ) }, Config.updateInterval
      )
    });
  }

  reset() {
    this.setState(getDefaultState(), () => {
      clearInterval(this.timerRef);
    });
  }

  render() {

    const { isRunning, time } = this.state;

    return (
      <div className="Timer">

        <h1></h1>

        <Counter time={ time } />

      </div>
    );
  }
}

export default Timer;