import SRSCompression from "./SRS/SRSCompression";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SRSDecompression from "./SRS/SRSDecompression";
import RLECompression from "./RLE/RLECompression";
import RLEDecompression from "./RLE/RLEDecompression";

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
  },
  {
    path: "/rle/compression",
    element: <RLECompression />,
  },
  {
    path: "/rle/decompression",
    element: <RLEDecompression />,
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
