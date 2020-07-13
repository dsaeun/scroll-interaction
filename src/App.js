import React from 'react';
import './App.css';
import Main from './pages/Main';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet"></link>
      <Header></Header>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;