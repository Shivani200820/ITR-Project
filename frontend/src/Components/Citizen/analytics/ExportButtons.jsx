import {
  Stack,
  Button,
} from "@mui/material";

import PictureAsPdfIcon
from "@mui/icons-material/PictureAsPdf";

import DownloadIcon
from "@mui/icons-material/Download";

import RefreshIcon
from "@mui/icons-material/Refresh";

function ExportButtons() {
  return (
    <Stack
      direction="row"
      spacing={2}
      mb={3}
    >
      <Button
        variant="contained"
        startIcon={<PictureAsPdfIcon />}
      >
        Export PDF
      </Button>

      <Button
        variant="outlined"
        startIcon={<DownloadIcon />}
      >
        Download Report
      </Button>

      <Button
        variant="outlined"
        startIcon={<RefreshIcon />}
      >
        Refresh
      </Button>
    </Stack>
  );
}

export default ExportButtons;