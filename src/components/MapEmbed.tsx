import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import getRuntimeEnv from "@/utils/env";

interface IProps {
  lat: string;
  lng: string;
}

const MapEmbed = ({ lat, lng }: IProps) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    mapStyles.height = "200px";
  }

  const latitude = parseFloat(lat);
  const longitude = parseFloat(lng);

  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
      <Marker position={defaultCenter} />
    </GoogleMap>
  );
};

export default MapEmbed;
