import React, { useEffect, useState } from "react";
import Card from "./Card";
import PokeInfo from "./PokeInfo";
import Buttons from "./Buttons";

function Cards() {
  const [pokeData, setPokeData] = useState([]);
  const [pokeDox, setPokeDox] = useState({});
  const [pokeInfoClass, setPokeInfoClass] = useState(
    "poke_info_card_container"
  );
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();
  const [isLoading, setIsLoading] = useState();

  function pokeInfo(data) {
    setPokeDox(data);
  }

  function pokeFun() {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokeData(data.results);
        setNext(data.next);
        setPrevious(data.previous);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    pokeFun();
  }, [url]);

  function loadPokemon() {
    return (
      <>
        <div className="cards">
          {pokeData.map((poke, index) => {
            return (
              <Card
                setPokeInfoClass={setPokeInfoClass}
                pokeInfo={pokeInfo}
                key={index}
                pokeName={poke.name}
                pokeImg={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${
                  poke.url.split("/")[poke.url.split("/").length - 2]
                }.svg`}
              />
            );
          })}
          <PokeInfo
            setPokeInfoClass={setPokeInfoClass}
            pokeInfoClass={pokeInfoClass}
            pokeDox={pokeDox}
          />
        </div>
      </>
    );
  }

  return (
    <div>
          <Buttons prev={previous} next={next} setUrl={setUrl} />
      {isLoading ? (
        <h1
          style={{
            textAlign: "center",
          }}
        >
          pokemon is loading...
        </h1>
      ) : (
        loadPokemon()
      )}
    </div>
  );
}

export default Cards;

//
