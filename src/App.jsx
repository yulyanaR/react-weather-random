import React from 'react';
import './App.css';
import Weather from './components/Weather';
import Header from './components/Header';

function App() {
  return (
    <>
      <header className="page-header">
        <Header/>
      </header>
      <main>
        <div>
          <Weather />
        </div>
      </main>
    </>

  );
}

export default App;