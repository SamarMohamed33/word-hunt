import { createTheme, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import "./Header.css";

const Header = ({ word, setWord, LightMode }) => {
  const darkTheme = createTheme({
    palette: {
      mode: LightMode ? "light" : "dark",
      primary: {
        main: LightMode ? "#000" : "#fff",
      },
    },
  });

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};
export default Header;
