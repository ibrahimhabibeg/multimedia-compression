import SimpleRepetitionSuppression from "./SimpleRepetitionSuppression/SimpleRepetitionSuppression";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SimpleRepetitionSuppression />
    </ThemeProvider>
  );
}

export default App;
