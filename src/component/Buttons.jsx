import React, { useCallback, useState } from "react";

function Buttons({ prev, next, setUrl }) {
  const [isPrev, setIsPrev] = useState(true);
  function handleNext() {
    setUrl(next);
    setIsPrev(false);
  }
  function handlePrev() {
    if (prev != null) {
      setUrl(prev)
    } else {
      setUrl('https://pokeapi.co/api/v2/pokemon');
      setIsPrev(true);
    }
  }
  return (
    <div>
      <button disabled={isPrev} onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
    </div>
  );
}

export default Buttons;
