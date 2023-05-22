import React from 'react'

function PokeInfo({ pokeDox, pokeInfoClass, setPokeInfoClass }) {

  function handleClick(e) {
    setPokeInfoClass("poke_info_card_container")
  }

  return (
    <div onClick={handleClick} className={pokeInfoClass}>
          <div className='poke_info_card'>
          <img style={{marginTop:"2rem"}} className='pokeimg' src={pokeDox.pokeImg} alt="" /> 
        <h1 className='pokename'>Name- {pokeDox.pokeName}</h1>
        <h1></h1>
          </div>
    </div>
  )
}

export default PokeInfo