import { FC } from "react";
import Book from "../components/Weihnachten/Book.tsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "lightsteelblue",
        },
      },
    },
  },
});
const Weihnachtsgruss: FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin: "20px",
      }}
    >
      <Book />
    </div>
  </ThemeProvider>
);

export default Weihnachtsgruss;
