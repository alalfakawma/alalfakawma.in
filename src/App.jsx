import React, { Component, Fragment } from 'react';
import '../node_modules/bulma/css/bulma.css';
import './css/app.css';
import MainContent from './components/MainContent.jsx';

class App extends Component {
  render() {
    return (
      <Fragment>
        <MainContent />
      </Fragment>
    );
  }
}

export default App;
