import React from 'react';
import {
  BrowserRouter, Route, Link, Switch, Redirect
} from 'react-router-dom';
import App from './App';

const App2 = () => <h2>App2</h2>;
const App3 = () => <h2>App3</h2>;
const Dashboard = () => (
  <BrowserRouter>
    <React.Fragment>
      <ul>
        <li>
          <Link to="./">App</Link>
        </li>
        <li>
          <Link to="./app1">App1</Link>
        </li>
        <li>
          <Link to="./app2">App2</Link>
        </li>
      </ul>
      <Route path="/" exact component={App} />
      <Route path="/app1" component={App2} />
      <Route path="/app2" component={App3} />
    </React.Fragment>
  </BrowserRouter>

);


export default Dashboard;
