import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Cart from "./cart/Cart";
import Shipping from "./shipping/Shipping";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";
import {Provider} from "react-redux";
import {ROUTES} from "../utils/const";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk)),
);


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path={ROUTES.CART} component={Cart}/>
              <Route path={ROUTES.SHIPPING} component={Shipping}/>
            </Switch>
          </Router>
        </Provider>
        <ToastContainer/>
      </div>
    );
  }
}

export default App;
