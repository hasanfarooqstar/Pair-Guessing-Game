import React, { useState } from "react";
import Card from "./Card";

function Cards() {
  const [lastScore, setlastScore] = useState(0);
  const [counter, setCounter] = useState(0);
  const [oldSelection, setOldSelection] = useState(-1);
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/Bulbasaur.png", status: "" },
      { id: 1, img: "/img/Bulbasaur.png", status: "" },
      { id: 2, img: "/img/ButterFree.png", status: "" },
      { id: 2, img: "/img/ButterFree.png", status: "" },
      { id: 3, img: "/img/Charmander.png", status: "" },
      { id: 3, img: "/img/Charmander.png", status: "" },
      { id: 4, img: "/img/Pickachu.png", status: "" },
      { id: 4, img: "/img/Pickachu.png", status: "" },
      { id: 5, img: "/img/Pidgetto.png", status: "" },
      { id: 5, img: "/img/Pidgetto.png", status: "" },
      { id: 6, img: "/img/Squirtle.png", status: "" },
      { id: 6, img: "/img/Squirtle.png", status: "" },
    ].sort(() => Math.random() - 0.5)
  );
  function handleClick(arryindex) {
    items[arryindex].status = "active"; //jis Card pe click ho wo turn ho jaye
    setItems([...items]); // ... spread operator array ko update kry ga
    if (oldSelection === -1) {
      // console.log(arryindex);
      setOldSelection(arryindex);
    } else {
      checkMatch(arryindex);
    }
    setCounter(counter + 1);
  }
  function checkMatch(newSelection) {
    console.log("Check Match Function me enter ho gya hai");
    if (items[oldSelection].id === items[newSelection].id) {
      setOldSelection(-1);
      setTimeout(() => {
        items[oldSelection].status = "cardhide";
        items[newSelection].status = "cardhide";
        setItems([...items]); // ... spread operator array ko update kry ga
      }, 1000);
    } else {
      setOldSelection(-1);
      setTimeout(() => {
        items[oldSelection].status = "";
        items[newSelection].status = "";
        setItems([...items]); // ... spread operator array ko update kry ga
      }, 1000);
    }
  }
  function restart() {
    items.map((item, index) => {
      items[index].status = "";
    });
    setItems([...items]);
    setlastScore(counter);
    setCounter(0);
  }

  return (
    <>
      <div className="container">
        {items.map((item, index) => (
          <Card
            key={index}
            item={item}
            arryindex={index}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className="result">
        <h3>
          MOVES : {counter} | BEST SCORE: {lastScore}{" "}
        </h3>
        <button className="btn" onClick={() => restart()}>
          Restart GAME
        </button>
      </div>
    </>
  );
}

export default Cards;
