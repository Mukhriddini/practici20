import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmojiResults from './components/EmojiResults';

function App() {
  const emojis = [
    {
      char: '💯',
      name: '100',
      keywords: 'Hundred, points, symbol, wow, win, perfect, parties'
    },
    {
      char: '🔢',
      name: '1234',
      keywords: 'input symbol for numbers symbol'
    }
  ];

  return (
    <>
      <Header />
      <SearchBar />
      <EmojiResults emojis={emojis} />
    </>
  );
}

export default App;
