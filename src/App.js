import React, { Component } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';

import CardListOne from './Components/CardListOne';
import CardListTwo from './Components/CardListTwo';
import SearchForm from './Components/SearchForm';
import Timer from './Components/Timer/Timer';
import timeFormatString from './Components/Timer/utils/timeFormatString';

import githubLogo from './imgs/githubLogo.png';
import './App.css';

function getDefaultState() {
  return {
    cards : [],
    cardsCopy : [],
    loadingState : false,
    notEnoughSearchResults : false,
    category : '',
    moves : 0,
    score : 0,
    clicked : null,
    clickedId : null,
    firstGuess : null,
    secondGuess : null,
    firstStart : false,
    startGame : false,
    exitGame : false,
    endTime : null,
    showStats : false,
    showNoresults : false,
    showGameCompleted : false
  }
}

const ApiKey=process.env.REACT_APP_API_KEY;

class App extends Component {

  constructor(props) {
  super(props);
  this.state = getDefaultState();
  this.clickHandler = this.clickHandler.bind(this);
  }

componentDidUpdate(nextProps, nextState) {
  // Check to see if cards array has a value:
  if(this.state.cards.length > 0 && !this.state.loadingState) {
    // If cards array is less than 6 show message that not enough search results found:
    if(this.state.cards.length < 6 && !this.state.showNoresults) {
        this.setState({notEnoughSearchResults : true, showNoresults : true});
    } else { // Initialize Game:
        this.setState({firstStart : true})
        this.initGame();
      }
  }

  // Toggle all the cards after first render:
  if(this.state.loadingState !== nextState.loadingState) {
    this.timeout = setTimeout(() => {
          this.toggleAll();
        },1500);
    this.toggleAll();
  }

  // Check to see if the game is completed:
  if(this.state.score !== nextState.score) {
    if(this.state.score === 6) {
      this.timeout = setTimeout(() => {
          this.gameCompleted();
        },1000);
    }
  }
  
}

shouldComponentUpdate(nextProps,nextState) {
  if(this.state.notEnoughSearchResults) {
    return false;
  } else {
    return true;
  }
}

initGame() {
  //Make a copy of the cards array and shuffle both arrays:
  var arr = this.state.cards,
      arr2 = arr.slice();
  this.shuffle(arr,'cards');
  this.shuffle(arr2,'cardsCopy');
  this.setState({loadingState : true});
}

clickHandler = (e) => {

    // Make sure the timer will start:
    if(!this.state.startGame) {
      this.setState({startGame : true, firstClick : true});
    }

    // Get the value of data-id from the clicked card:
    var clickedId = e.currentTarget.dataset.id;
 
    // Check to see if the card is not already assigned as matched:
    if(!e.currentTarget.classList.contains('match')) {
      // Check to see if the card is not yet clicked:
      if(clickedId !== this.state.clickedId) {
        this.setState({clickedId})
          // Make sure max of 2 cards should be turned at the same time:
        if(this.state.clicked < 2) {

          // Add class is-flipped to turn front card 180 degrees:
          e.currentTarget.classList.toggle('is-flipped');

          // Check if firstGuess is not set:
          if(!this.state.clicked) {
            var firstGuess = e.currentTarget.dataset.card;
            this.handleIncreaseClicked();
            this.setState({firstGuess});
          } else {
            var secondGuess = e.currentTarget.dataset.card;
            this.handleIncreaseClicked();
            //SetState the secondGuess and use callback to run this.match():
            this.setState({secondGuess},() => this.match());
          } 
        }
      } 
    }
}

shuffle = (array, cards) => {
  var arr = array;
  var currentIndex = arr.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  
  // Check to see which state.cards array has to be modified:
  if(cards === 'cards') {
    this.setState({cards : arr});
  } else if(cards === 'cardsCopy') {
    this.setState({cardsCopy : arr});
  }
  
}

handleIncreaseClicked = () => {
    this.setState((prevState,props) => {
      return {clicked : prevState.clicked + 1};
    });
  }

match = () => {
    var firstGuess = this.state.firstGuess,
        secondGuess = this.state.secondGuess;
    
    if(firstGuess && secondGuess) {

      if(firstGuess === secondGuess) {
        // Add score:
        this.setState({score : this.state.score + 1});
        var selected = document.getElementsByClassName('is-flipped');
        //add class match and remove class is-flipped:
        while (selected.length > 0) {
          selected.item(0).classList.add('match');
          selected[0].classList.remove('is-flipped');
        }
        this.resetCards();

      } else {
        //Reset the cards back to initial position:
        this.timeout = setTimeout(() => {
          this.resetCards();
        },1000);
      }
    }
    
  }

  resetCards = () => {
    this.setState({clicked : null, clickedId : null, moves : this.state.moves + 1, firstGuess : null, secondGuess : null});
    //Remove class is-flipped:
    var selected = document.getElementsByClassName('is-flipped');
    while(selected.length > 0) {
      selected[0].classList.remove('is-flipped');
    }
  }

  newGame = () => {
    this.setState({loadingState : false, exitGame : true, showStats : true});
    //Remove class is-flipped:
    var selectIsFlipped = document.getElementsByClassName('is-flipped');
    while(selectIsFlipped.length > 0) {
      selectIsFlipped[0].classList.remove('is-flipped');
    }
    //Remove class match:
    var selectMatch = document.getElementsByClassName('match');
    while(selectMatch.length > 0) {
      selectMatch[0].classList.remove('match');
    }
    
  }

  toggleAll = () => {
    var selectAllCards = document.querySelectorAll('.card');
    selectAllCards.forEach(card => {
      card.classList.toggle('is-flipped');
    })
  }

  performSearch = (query) => {
    if(query) {
      axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=6&query=${query}&client_id=${ApiKey}`
      )
      .then(data => {
        if(data.data.results.length === 0) {
          this.setState({notEnoughSearchResults : true});
        } else {
          this.setState({ cards: data.data.results, category : query, notEnoughSearchResults : false});
        }
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
    }
  }

  restartGame = () => {
    this.setState({clicked : null, firstGuess : null, secondGuess : null, startGame : false, showStats : true});
    //Remove class is-flipped:
    var selectIsFlipped = document.getElementsByClassName('is-flipped');
    while(selectIsFlipped.length > 0) {
      selectIsFlipped[0].classList.remove('is-flipped');
    }
    //Remove class match:
    var selectMatch = document.getElementsByClassName('match');
    while(selectMatch.length > 0) {
      selectMatch[0].classList.remove('match');
    }
    this.initGame();
  }

  // Receive totalTime value from Timer component:
  totalTime = (val) => {
    var endTime = timeFormatString(val);
    this.setState({endTime});
  }

  gameCompleted = () => {
    this.setState({startGame : false, showGameCompleted : true});
  }

  handleCloseGameCompleted = () => {
    this.setState(getDefaultState());
  }

  handleCloseStats = () => {
    
    if(this.state.exitGame) {
      // If New Game button is pressed than getDefaultState to start at the beginning:
      this.setState(getDefaultState());
    } else {
      // Restart button is pressed. Set showStats to false and make sure moves, score and endTime is back to 0:
      this.setState({showStats : false, moves : 0, score : 0, endTime : null});
    }
  }

  handleCloseNoResults = () => {
    this.setState(getDefaultState());
  }

  handleNoResults = () => {
    // Prevent from double clicking on OK:
      this.setState(getDefaultState());
  }

  render() {

    return (
      <div className="App">
        <div className="header">
        <h1>Memory Game</h1>

          {!this.state.loadingState && this.state.notEnoughSearchResults ?
            <SearchForm onSearch={this.performSearch} /> : 
              !this.state.loadingState ?
            <SearchForm onSearch={this.performSearch}/> : 
            <div className="score-board">
              <div className="category shadow">
                <p><b>Theme:</b></p> 
                <p>{this.state.category}</p>
              </div>
              <div className="header-buttons">
                <button onClick={this.toggleAll}>Toggle All</button>
                <button onClick={this.newGame}>New Game</button>
                <button onClick={this.restartGame}>Restart Game</button>
              </div>
              <div className="game-stats shadow">
                <Timer startGame={this.state.startGame} moves={this.state.moves} totalTime={this.totalTime} />
              </div>
            </div>}
        </div>
        
          {!this.state.loadingState ? null
            : <div className="wrapper">
              <CardListOne dataOne={this.state.cards} startGame={this.state.startGame} className={'card'} clickHandler={this.clickHandler} />
              <CardListTwo dataTwo={this.state.cardsCopy} startGame={this.state.startGame} className={'card'} clickHandler={this.clickHandler} />
              </div>
          }
        <div className="footer">
          <ul>
            <li>Code & design by Adam Trincas.</li>
          </ul>
          <ul>
            <li><a href="https://github.com/atrincas/React_Memory_Game" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="github" height="16" width="16"></img></a></li>
          </ul>
        </div>
        <ReactModal className="modal" ariaHideApp={false} overlayClassName="overlay" isOpen={this.state.showStats}>
          <h3>Stats:</h3>
          <ul>
            <li>Total moves: {this.state.moves}</li>
            <li>Total correct: <b>{this.state.score}</b> out of <b>6</b></li>
            <li>Total time: {this.state.endTime}</li>
          </ul>
          <button onClick={this.handleCloseStats}>OK</button>
        </ReactModal>
        <ReactModal className="modal" ariaHideApp={false} overlayClassName="overlay" isOpen={this.state.showGameCompleted}>
          <h3>You completed the game!</h3>
          <ul>
            <li>Total moves: {this.state.moves}</li>
            <li>Total time: {this.state.endTime}</li>
          </ul>
          <button onClick={this.handleCloseGameCompleted}>OK</button>
        </ReactModal>
        <ReactModal className="modal" ariaHideApp={false} overlayClassName="overlay" isOpen={this.state.notEnoughSearchResults} onAfterOpen={this.handleNoResults}>
          <h3>Not enough search results to make a game. Please try again.</h3>
          <button onClick={this.handleCloseNoResults}>OK</button>
        </ReactModal>
      </div>
    );
  }
}

export default App;
