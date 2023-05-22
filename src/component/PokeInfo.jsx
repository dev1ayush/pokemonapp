import React from "react";

function PokeInfo({ pokeDox, pokeInfoClass, setPokeInfoClass, isPokeInfoLoading }) {
  function handleClick(e) {
    setPokeInfoClass("poke_info_card_container");
  }

  function loadPokeCard() {
    return (
      <div className="poke_info_card">
        <img
          style={{ marginTop: "2rem" }}
          className="pokeimg"
          src={pokeDox.img}
          alt=""
        />
        <h1 className="pokename">Name- {pokeDox.name}</h1>
        <p>Height- {pokeDox.height}</p>
        <p>Weight- {pokeDox.weight}</p>
      </div>
    );
  }

  return <div onClick={handleClick} className={pokeInfoClass}>
    {isPokeInfoLoading ? <p>loading...</p> : loadPokeCard()}
  </div>;
}

export default PokeInfo;
