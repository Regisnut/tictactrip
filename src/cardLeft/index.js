import React from "react";
import "./index.css";

const CardLeft = ({
  departureSelected,
  setStateSelectedDeparture,
  setStateSelectedArrival,
  departure,
  arrival,
  handleInputChange,
  apiUrl,
  getApi,
  handleDepartureApi
}) => {
  return (
    <div className="card">
      <h2 className="card-container-title">Quel est votre trajet ?</h2>

      <input
        onClick={() => {
          {
            setStateSelectedDeparture();
          }
        }}
        className={departureSelected === 0 ? "selected" : ""}
        name="departure"
        type="text"
        placeholder="Saisissez votre gare de départ..."
        value={departure}
        onChange={async e => {
          handleInputChange(e);
          const response = await getApi(apiUrl, e.target.value);
          handleDepartureApi(response);
        }}
      />

      <input
        onClick={() => {
          {
            setStateSelectedArrival();
          }
        }}
        className={departureSelected === 1 ? "selected" : ""}
        name="arrival"
        type="text"
        placeholder="Saisissez votre gare d'arrivée..."
        value={arrival}
        onChange={async e => {
          handleInputChange(e);
          const response = await getApi(apiUrl, e.target.value);
          handleDepartureApi(response);
        }}
      />
    </div>
  );
};

export default CardLeft;
