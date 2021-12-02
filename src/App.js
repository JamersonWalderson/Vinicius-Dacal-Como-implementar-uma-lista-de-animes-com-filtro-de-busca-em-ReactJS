import React, { useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./SearchInput";

const api = "https://kitsu.io/api/edge/";

export default function App() {
  const [text, setText] = useState("");
  const [info, setInfor] = useState({});

  useEffect(() => {
    if (text) {
      setInfor({});

      fetch(`${api}anime?filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => {
          setInfor(response);
          console.log(text);
        });
    }
  }, [text]);

  return (
    <div className="App container-fluid">
      <h1>Animes</h1>
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {text && !info.data && <span>Carregando..</span>}
      {info.data && (
        <div className="row">
          {info.data.map((anime) => (
            <div className="col-md-3" key={anime.id}>
              <div className="">
                <img
                  src={anime.attributes.posterImage.small}
                  className="img-fluid"
                  alt={anime.attributes.canonicalTitle}
                />
                <div className="card-body">
                  <p className="card-text fw-bold fs-5">
                    {anime.attributes.canonicalTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
