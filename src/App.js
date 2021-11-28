import React, { useEffect, useState } from 'react';
import './App.css';
import SearchInput from './SearchInput';

const api = 'https://kitsu.io/api/edge/';

export default function App() {
  const [text, setText] = useState('');
  const [info, setInfor] = useState({});

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => {
          setInfor(response);
          console.log(text);
          
        });
    }

  }, [text]);

  return (
    <div className="App">
      <h1>Animes</h1>
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {info.data && (
        <ul>
          {info.data.map((anime) => (
            <li key={anime.id}>
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
