import React from "react";

function Card({ item, arryindex, handleClick }) {
  return (
    <>
      <div
        className={`card ${item.status} `}
        onClick={() => handleClick(arryindex)}
      >
        <img src={item.img} alt="" />
      </div>
    </>
  );
}

export default Card;
