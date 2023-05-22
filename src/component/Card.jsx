import React from 'react'

function Card({ poke, pokeImg, pokeName, pokeInfo, setPokeInfoClass }) {

  function handleClick() {
    pokeInfo(poke.url, pokeImg)
    setPokeInfoClass('poke_info_card_container_active')
  }

  return (
      <div onClick={handleClick} className='card'>
          <img className='pokeimg' src={pokeImg} alt="" />
          <p className='pokename'>{pokeName}</p>
    </div>
  )
}

export default Card