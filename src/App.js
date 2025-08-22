import React from 'react';
import './styles/App.css';
import PomodoroTimer from './components/PomodoroTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>test!</p>
        <PomodoroTimer />
        <p>test!</p>
      </header>
    </div>
  );
}

export default App;