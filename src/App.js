import React from "react";
import axios from "axios";
import MainLayout from "../src/mainlayout/index.js";
import CardRight from "../src/cardRight/index";
import CardLeft from "../src/cardLeft/index.js";
/*
3 API pour chercher les villes
https://api.tictactrip.eu/cities/autocomplete/?q=P (remplace P par ce que rentre l’utilisateur) (cela autocomplete les villes de tictactrip)
https://api.tictactrip.eu/cities/popular/5 ( recevoir les villes populaires)
https://api.tictactrip.eu/api/cities/popular/from/puteaux/5 (popular/from/ UNIQUENAME/5) (recevoir les destinations populaires depuis le UNIQUENAME
*/

const API_CITIES_AUTOCOMPLETE =
  "https://api.tictactrip.eu/cities/autocomplete/?q=";
const API_CITIES_POPULAR = "https://api.tictactrip.eu/cities/popular/";
const API_CITIES_POPULAR_FROM =
  "https://api.tictactrip.eu/api/cities/popular/from/puteaux/5";

class App extends React.Component {
  state = {
    // State des inputs
    departure: "",
    arrival: "",
    // State pour les API
    departureApi: null,
    // State pour mettre du style sur l'input sélectionné et selection depart=0 et arrival=1
    departureSelected: null,
    isLoading: true
  };

  // Function pour récupérer les API
  getData = async (apiUrl, value) => {
    const paramRequest = value ? value : "";
    const response = await axios.get(apiUrl + paramRequest);
    return response.data;
  };

  handleDepartureApi = obj => {
    let { departureApi } = this.state;
    departureApi = obj;
    this.setState({ departureApi });
  };

  async componentDidMount() {
    const departureApi = await this.getData(API_CITIES_POPULAR, 5);
    this.setState({ departureApi, isLoading: false });
  }

  //handleInputChange pour charger l'input en fonction state departure/arrival en fonction de l'attribut name
  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  //setState soit 0=selected, soit 1=non selected
  setStateSelectedDeparture = () => {
    this.setState({ departureSelected: 0 });
  };
  setStateSelectedArrival = () => {
    this.setState({ departureSelected: 1 });
  };

  render() {
    // // destructuring state
    const {
      departure,
      departureApi,
      arrival,
      arrivalApi,
      departureSelected
    } = this.state;

    const cardLeftProps = {
      departureSelected: departureSelected,
      setStateSelectedDeparture: this.setStateSelectedDeparture,
      setStateSelectedArrival: this.setStateSelectedArrival,
      handleInputChange: this.handleInputChange,
      departure: departure,
      arrival: arrival,
      departureApi: departureApi,
      arrivalApi: arrivalApi,
      getApi: this.getData,
      apiUrl: API_CITIES_AUTOCOMPLETE,
      handleDepartureApi: this.handleDepartureApi
    };
    const cardRightProps = {
      departureSelected: departureSelected,
      departureApi: departureApi,
      popularMapList: this.popularMapList
    };
    return (
      <MainLayout>
        <div className="body-container">
          <h1>Réservez vos billets de train et de bus.</h1>
          <div className="card-container">
            <CardLeft {...cardLeftProps} />
            <CardRight {...cardRightProps} />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default App;
