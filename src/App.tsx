import SimpleRepetitionSuppression from "./SimpleRepetitionSuppression/SimpleRepetitionSuppression";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/SimpleRepetitionSuppression",
    element: <SimpleRepetitionSuppression />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
