import React from 'react';
import { Loader } from "@googlemaps/js-api-loader";

const google = window.google;

const BrowserMap = () => {
  // let browserMap;

  const loader = new Loader( {
    apiKey: "AIzaSyC4tKqafeJGqlniWa2rHd8KdHOvjRvIwv4",
    version: "weekly", 
    // ...additionalOptions,
    
  });
  
  // loader.load().then(async () => {
  //   const { Map } = await google.maps.importLibrary("maps");

  //   let smallMap = new Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // });


  // async function initMap() {
  //   const position = { lat: -25.344, lng: 131.031 };

  //   const { Map } = await google.maps.importLibrary("maps")
  // }
};

export default BrowserMap;