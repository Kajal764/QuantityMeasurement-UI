
import React, { Component } from 'react'
import "./App.css";
import TitleName from '../src/titlename'
import Main from '../src/main'
//class
export class App extends Component {
  render() {
    return (
      <div>
        <TitleName/>
        <Main/>
      </div>
    )
  }
}

export default App
