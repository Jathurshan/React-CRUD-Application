import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import { ProjectForm } from './component/AddProject/index';
import { ListProject } from './component/AddProject/list-project';
import EditProject from './component/AddProject/edit-project';

ReactDOM.render(
<BrowserRouter>
<Switch>
   <Route exact path='/' component={App}/>
   <Route path='/addproject' component={ProjectForm}/>
   <Route path= '/listproject' component = {ListProject}/>
   <Route path= '/editproject/:id' component = {EditProject}/>
</Switch>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
