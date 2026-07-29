import {
  Marker,
  Popup
} from "react-leaflet";

import ComplaintPopup from "./ComplaintPopup";

function ComplaintMarker({ complaint }) {
  return (
    <Marker
      position={[
        complaint.lat,
        complaint.lng
      ]}
    >
      <Popup>
        <ComplaintPopup
          complaint={complaint}
        />
      </Popup>
    </Marker>
  );
}

export default ComplaintMarker;