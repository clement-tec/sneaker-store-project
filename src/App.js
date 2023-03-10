import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from './Header';
import PageContainer from './PageContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact match="/">
        <PageContainer/>
      </Route>
    </div>
  );
}

export default App;
