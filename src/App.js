import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import './App.css'

export default class App extends Component {

  componentDidMount() {
    this.setUser()
  }
  render() {
  return (
      <div className="App">
          <LandingPage/>
      </div>
    )
  }
}


