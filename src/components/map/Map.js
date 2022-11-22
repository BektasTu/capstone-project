import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={DefaultIcon} />
    );
  }

  return (
    <>
      <MapContainer
        center={{ lat: 50.935, lng: 6.95 }}
        zoom={6}
        scrollWheelZoom={false}
        style={{
          width: "23rem",
          height: "13rem",
          borderRadius: "10px",
          border: "solid 1px black",
          boxShadow: "0 0 10px black",
          margin: "2rem auto",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=004dc4243b9b679b9d49266b99fe15d1" />
        <LocationMarker />
      </MapContainer>
    </>
  );
}

export default Map;
