import React from 'react';
import './styles/App.css';
import PomodoroTimer from './components/PomodoroTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro Timer</h1>
      </header>
      <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PomodoroTimer />
      </div>
      <p>Add tasks below</p>
      {/* <TaskList /> */}
    </div>
  );
}

export default App;