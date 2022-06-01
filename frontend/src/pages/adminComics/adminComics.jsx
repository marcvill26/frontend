import React from "react";

export default function adminComics() {
  return (
    <div className="container">
      <div className="container__hijo">
        <h2>agregar comics</h2>
        <form className="form">
          <label>ingresar comic</label>

          <input></input>
          <label>ingresar escritor</label>
          <input></input>
          <label>añadir imagen</label>
          <input></input>
          <label>añadir año</label>
          <input type="date"></input>
          <label>ingresar dibujante</label>
          <input></input>

          <div className="button">
            <button className="button__agregar" type="submit">
              agregar
            </button>
            <button className="button__eliminar" type="submit">
              eliminar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
