import SRSCompression from "./SRS/SRSCompression";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SRSDecompression from "./SRS/SRSDecompression";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/srs/compression",
    element: <SRSCompression />,
  },
  {
    path: "/srs/decompression",
    element: <SRSDecompression />,
  }
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
