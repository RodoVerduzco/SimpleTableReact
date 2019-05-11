/* jshint esversion: 6 */
import React from 'react';
import axios from 'axios';

import { Root } from './components/Root.js';
import { LoadingPage } from './components/LoadingPage.js';

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      users: [],
      loading: true
    };

    this.componentDidMount =  this.componentDidMount.bind(this);
  }

  componentDidMount() {

    // Call the API to get the data
    axios.get(`https://randomuser.me/api?results=20`)
      .then((res) => {
        this.setState({
          users: res.data.results,
          loading: false
         });
      });
  }

  render() {
    var {loading} = this.state;

    // Data not loaded yet
    if(loading){
      return (
        <LoadingPage />
      );
    }
    // Data loaded correctly
    else {
      return (
        <div className="App">
          <Root data={ this.state.users }/>
        </div>
      );
    }
}
}

export default App;
