import { Card, CardMedia } from "@mui/material";

import demoImage from "../../../assets/images/hero.png";
function PreviewImage() {
  return (
    <Card>
      <CardMedia
        component="img"
       image={demoImage}
       alt="Complaint Preview"
      />
    </Card>
  );
}

export default PreviewImage;