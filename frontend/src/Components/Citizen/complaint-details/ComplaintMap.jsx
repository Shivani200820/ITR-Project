import {
  Paper,
  Typography,
} from "@mui/material";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

function ComplaintMap() {

  const position = [18.5204,73.8567];

  return (

    <Paper sx={{ p:3, mb:3 }}>

      <Typography
      variant="h6"
      mb={2}
      >
        Complaint Location
      </Typography>

      <MapContainer
      center={position}
      zoom={15}
      style={{
        height:"400px",
        width:"100%"
      }}
      >

        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            Complaint Reported Here
          </Popup>
        </Marker>

      </MapContainer>

    </Paper>

  );
}

export default ComplaintMap;