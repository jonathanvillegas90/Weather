import React from "react";
import "./Card.css";

export default function Card({ min, max, name, img, onClose, id }) {
  const imag = `http://openweathermap.org/img/wn/${img}@2x.png`;
  return (
    <div key={id} className="divCard">
      <div className="cierre">
        <button onClick={onClose} className="btn">
          ❌
        </button>
      </div>
      <div className="head">
        <h3>{name}</h3>
      </div>
      <div className="temp">
        <div className="max">
          <p>Max:</p>
          <p>{max}°</p>
        </div>
        <div className="min">
          <p>Min:</p>
          <p>{min}°</p>
        </div>
        <div>
          <img src={imag} alt="icono" />
        </div>
      </div>
    </div>
  );
}
