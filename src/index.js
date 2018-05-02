import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostsIndex  from './components/PostsIndex';
import PostCreator from './components/PostCreator';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
        <Switch>
          <Route path="/new" component={PostCreator} />
    		  <Route path="/" component={PostsIndex} />
        </Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
