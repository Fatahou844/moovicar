import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Importez les styles Leaflet
import React, { useEffect } from "react";
import {
  Circle,
  LayerGroup,
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import { useLocation } from "react-router-dom";

const MapItem = ({ centers }) => {
  const zoom = 16;

  const vehicleIcon = new L.Icon({
    iconUrl:
      "https://icones.pro/wp-content/uploads/2021/03/icone-de-voiture-symbole-png-verte.png", // Spécifiez le chemin vers votre icône
    iconSize: [32, 32], // Taille de l'icône
    iconAnchor: [16, 32], // Point d'ancrage de l'icône
    popupAnchor: [0, -32], // Point d'ancrage du popup
  });
  const location = useLocation();

  useEffect(() => {
    // Vous pouvez éventuellement ajouter des opérations à effectuer
    // lorsqu'il y a des changements dans les données (centers).
    // Cela pourrait inclure des opérations de mise à jour du state,
    // des appels à des API, etc.
  }, [centers]);

  return (
    <>
      <MapContainer
        center={centers[0].coordinates}
        zoom={zoom}
        style={{
          height: location.pathname.includes("search") ? "100vh" : "500px",
          width: location.pathname.includes("search") ? "100%" : "100%",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Utilisez LayerGroup pour regrouper plusieurs couches */}
        <LayerGroup>
          {/* Ajoutez le Marker avec l'icône personnalisée */}
          {centers.map((center) => (
            <Marker
              key={center.id}
              position={center.coordinates}
              icon={
                new L.DivIcon({
                  className: "custom-marker",
                  html: `<div class="badge-container"><span class="badge bg-tertiary" style="font-size: 16px;"><ion-icon name="car-sport-outline"></ion-icon> ${center.price}€</span>
                  </div>`,
                })
              }
            >
              <Tooltip>
                <div style={{ textAlign: "center" }}>
                  <strong>{center.name}</strong>
                  <br />
                  Price: ${center.price}
                </div>
              </Tooltip>
            </Marker>
          ))}

          {/* Ajoutez le Circle avec une couleur personnalisée */}
          <Circle
            center={centers[0].coordinates}
            radius={400}
            fillColor="blue"
            fillOpacity={0.2}
          />
        </LayerGroup>
      </MapContainer>
    </>
  );
};

export default MapItem;
