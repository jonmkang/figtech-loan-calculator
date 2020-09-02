import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoanCalculator from './components/LoanCalculator/LoanCalculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <LoanCalculator/>
    </div>
  );
}

export default App;
