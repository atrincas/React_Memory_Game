import React, { Component } from 'react';
import axios from 'axios';

import cred from './Components/cred';

import './App.css';

class App extends Component {

  constructor() {
  super();
  this.state = {
    imgs : []
    }
  }

componentWillMount() {

  axios
    .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=12&query='water'&client_id=${cred._applicationId}`
      )
    .then(data => {
      this.setState({imgs : data.data});
      })
    .catch(err => {
      console.log('Error happened during fetching!', err);
    });

  }

  render() {
    return (
      <div className="App">
      {console.log(this.state.imgs)}
      </div>
    );
  }
}

export default App;
