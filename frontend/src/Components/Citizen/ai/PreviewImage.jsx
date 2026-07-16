import { Card, CardMedia } from "@mui/material";

import demoImage from "../../../assets/images/road_damage.jpg";

function PreviewImage() {
  return (
    <Card>
      <CardMedia
        component="img"
        image={roadImage}
        alt="Road Damage"
      />
    </Card>
  );
}

export default PreviewImage;