import React, { useEffect, useState } from "react";
import Card from "./Card";
import PokeInfo from "./PokeInfo";
import Buttons from "./Buttons";

function Cards() {
  const [pokeData, setPokeData] = useState([]);
  // pokeDox data is sent to pokeinfo component
  const [pokeDox, setPokeDox] = useState({});
  const [pokeInfoClass, setPokeInfoClass] = useState(
    "poke_info_card_container"
  );
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isPokeInfoLoading, setIsPokeInfoLoading] = useState(true);
  
  // fetching single pokemaon data (height, weight) for poke info card
  function pokeInfo(data, img) {
    setIsPokeInfoLoading(true);
    fetch(data)
      .then((res) => res.json())
      .then((data) => {
        setPokeDox({
          name: data.name,
          height: data.height,
          weight: data.weight,
          ability1: data.abilities[0].ability.name,
          ability2: data.abilities[1].ability.name,
          img : img
        })
        setIsPokeInfoLoading(false);
      });
  }
  console.log(pokeDox)
  // fetching pokemon data from poke api
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

  // loading pokemon cards on homepage
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
                poke={poke}
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
            isPokeInfoLoading={isPokeInfoLoading}
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
