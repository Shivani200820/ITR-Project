import {
  Button,
  Stack,
} from "@mui/material";

import MicIcon from "@mui/icons-material/Mic";

function VoiceUpload() {
  return (
    <Stack>
      <Button
        variant="outlined"
        startIcon={<MicIcon />}
      >
        Upload Voice Note
      </Button>
    </Stack>
  );
}

export default VoiceUpload;