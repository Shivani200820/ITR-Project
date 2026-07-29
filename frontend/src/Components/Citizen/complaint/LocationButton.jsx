import { Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function LocationButton() {
  return (
    <Button
      variant="outlined"
      startIcon={<LocationOnIcon />}
      fullWidth
    >
      Detect Current Location
    </Button>
  );
}

export default LocationButton;