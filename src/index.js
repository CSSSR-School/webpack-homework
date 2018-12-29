import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import Albums from './pages/albums'
import Tags from './pages/tags'
import Add from './pages/add'

import Header from './components/Header'
import Content from './components/Content'

import './components/common.css';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header/>
          <Content>
            <Route exact path='/albums' component={Albums} />
            <Route exact path='/tags' component={Tags} />
            <Route exact path='/add' component={Add} />
            <Redirect from="/" to="albums" />
          </Content>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
