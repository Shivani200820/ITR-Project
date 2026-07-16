import { Card, CardMedia } from "@mui/material";

import demoImage from "../../../assets/images/road_damage.jpg";

function PreviewImage() {
  return (
    <Card>
      <CardMedia
        component="img"
        height="400"
        image={demoImage}
        alt="Complaint"
      />
    </Card>
  );
}

export default PreviewImage;