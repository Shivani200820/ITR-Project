import { useContext } from "react";

import { IconButton } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { ColorModeContext } from "../../theme/ThemeContext";

function ThemeToggle() {

  const { mode, toggleTheme } = useContext(ColorModeContext);

  console.log("Theme :", mode);

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
    >
      {mode === "light" ? (
        <DarkModeIcon />
      ) : (
        <LightModeIcon />
      )}
    </IconButton>
  );
}

export default ThemeToggle;