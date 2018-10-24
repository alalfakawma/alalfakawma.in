import React, { Component, Fragment } from 'react';
import '../node_modules/bulma/css/bulma.css';
import './css/app.css';
import MainContent from './components/MainContent.jsx';

class App extends Component {
  render() {
    return (
      <Fragment>
        <MainContent />
        <form netlify name="test-form">
			<input type="text" name="name" />
			<input type="submit" value="tell me ya name" />
        </form>
      </Fragment>
    );
  }
}

export default App;
