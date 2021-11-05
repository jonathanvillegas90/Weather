import React from 'react';
import styles from '../style/SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={styles.bar}>
      <input  className={styles.camp} placeholder="Ciudad.."></input>
      <button className={styles.btn} onClick={props.onSearch}>Agregar</button>
    </div>
  )
};