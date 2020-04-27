import React from 'react';
import './App.css';
import Details from './Details';
import Home from './Home';
import Nav from './Nav';
import StudentList from './StudentList';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
    <Nav/>
    <Switch>

    <Route path='/studentList' exact component={StudentList}/>
    <Route path='/studentList/:index' component={Details}/>
    <Route path='/' component={Home}/>
    </Switch>
  
    </div>
    </BrowserRouter>
  );
}
export default App;
