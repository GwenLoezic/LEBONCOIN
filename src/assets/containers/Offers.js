// ****************************************************
// *-------------------- OFFERS ----------------------*
// ****************************************************

// IMPORT PACKAGE -------------------------------------
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Offers = () => {
  // MES STATES ---------------------------------------
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // ENVOI REQUÊTE SERVEUR ----------------------------
  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/offer/with-count"
    );
    setData(response.data);
    setIsLoading(false);
  };
  // EVITE LE RAFRAICHISSEMENT DE LA PAGE -------------
  useEffect(() => {
    fetchData();
  }, []);
  // RECEPTION REQUÊTE SERVEUR ------------------------
  return isLoading ? (
    <span>CHARGEMENT</span>
  ) : (
    <div>
      {data.offers.map((offer, index) => {
        console.log(offer)
        return (
          <Link key={offer._id} to={`/offer/${offer._id}`}>
            <div
              style={{ border: "1px solid black", width: 400, marginLeft: 50 }}
            >
              <p>{offer.title}</p>
              <p>{offer.price}</p>
              <img src={offer.picture.secure_url} alt="offer picture"/>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Offers;
