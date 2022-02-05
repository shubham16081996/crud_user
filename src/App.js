import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Adduser from './components/Adduser';
import EditUser from './components/EditUser';
import SeeUser from './components/SeeUser';
const App = () => {
  return (
    <Router>
     <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users/add" component={Adduser}/>
        <Route exact path="/users/edit/:id" component={EditUser}/>
        <Route exact path="/users/:id" component={SeeUser}/>

        <Route  component={NotFound}/>
      </Switch>
     </>
    </Router> 
  )
}

export default App

