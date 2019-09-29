import React from "react";
import "./index.css";

//card de droite avec call API popular au click de l'input départ, et qui se remplace par l'API autocomplete

const CardRight = ({ popularMapList, departureSelected, departureApi }) => {
  popularMapList = () => {
    if (!departureApi) return;
    const mappedData = departureApi.map((city, index) => {
      return (
        <li key={index}>
          <div>{city.unique_name}</div>
        </li>
      );
    });
    return mappedData;
  };

  return (
    <div className="card">
      <h2 className="card-container-title">
        {"Choix Gare " + (departureSelected === 1 ? "d'arrivée" : "de départ")}
      </h2>
      {departureSelected !== null ? (
        <ul>{departureApi ? popularMapList() : null}</ul>
      ) : null}
    </div>
  );
};

export default CardRight;
