import React, { Component } from 'react';
import { VisibleContext, VisibleControl, createContext } from "react-visible-control";

class App extends Component {
  render() {
    return (
      <div className="App">
        <VisibleContext data={{ "home": true, "page1": true }}>
          <div>
            <VisibleControl visibleKey="home">
              <p>home</p>
            </VisibleControl>
            <VisibleControl visibleKey="page1">
              <p>page1</p>
            </VisibleControl>
            <VisibleControl visibleKey="page2">
              <p>page2</p>
            </VisibleControl>
          </div>
        </VisibleContext>
      </div>
    );
  }
}

export default App;
