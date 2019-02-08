import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import {Provider} from 'react-redux'
import store from './ducks/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Nav location={this.props.location}/>
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
      

