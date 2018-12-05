import React, { Component } from 'react';

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
        this.getTotalTime();
        this.reset();
      }
  }

  componentWillUnmount() {
    this.getTotalTime();
    clearInterval(this.timeRef);
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

  getTotalTime = () => {
    var endTime = this.state.time;
    this.props.totalTime(endTime);
  }

  render() {

    const { isRunning, time } = this.state;

    return (
      <div className="timer">
        <p><b>Elapsed Time:</b> <Counter time={ time } /></p>
        <p>{this.props.moves === 1 ? '1 move' : this.props.moves + ' moves'}</p>
      </div>
    );
  }
}

export default Timer;