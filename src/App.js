import React, { useEffect, useState } from 'react';
import './App.css';
import SearchInput from './SearchInput';

const api = 'https://kitsu.io/api/edge/';

export default function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => console.log(response));
    }

  }, [text]);

  return (
    <div className="App">
      <h1>Animes</h1>
      <SearchInput value={text} onChange={(search) => setText(search)} />
    </div>
  );
}
