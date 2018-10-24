import React, { Component, Fragment } from 'react';
import '../node_modules/bulma/css/bulma.css';
import './css/app.css';
import MainContent from './components/MainContent.jsx';

class App extends Component {
  render() {
    return (
      <Fragment>
        <MainContent />
        <form name="contact" method="post" data-netlify="true">
        	<input type="text" name="name"/>
			<button type="submit">Send</button>
        </form>
      </Fragment>
    );
  }
}

export default App;
