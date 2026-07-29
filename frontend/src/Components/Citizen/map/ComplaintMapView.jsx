import {
  MapContainer,
  TileLayer
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import complaints from "./complaintsData";

import ComplaintMarker from "./ComplaintMarker";

function ComplaintMapView() {
  return (
    <MapContainer
      center={[18.5204, 73.8567]}
      zoom={13}
      style={{
        height: "650px",
        borderRadius: 16
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {complaints.map((item) => (
        <ComplaintMarker
          key={item.id}
          complaint={item}
        />
      ))}
    </MapContainer>
  );
}

export default ComplaintMapView;