// ****************************************************
// *---------------------- OFFER ---------------------*
// ****************************************************

// IMPORT PACKAGE -------------------------------------
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  // MES STATES ---------------------------------------
  const params = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // ENVOI REQUÊTE SERVEUR ----------------------------
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/offer/${params.id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    // EVITE LE RAFRAICHISSEMENT DE LA PAGE -------------
    fetchData();
  }, [params.id]);
  // RECEPTION REQUÊTE SERVEUR ------------------------
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <img src={data.picture.secure_url} alt="offer picture" />
    </div>
  );
};

export default Offer;
