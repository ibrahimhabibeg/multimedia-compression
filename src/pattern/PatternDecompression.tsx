import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { decompress } from "./compression";
import { useSearchParams } from "react-router-dom";
import Link from "@mui/material/Link";
import Footer from "../Footer";

const PatternDecompression = () => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("text") ?? "");
  const [map, setMap] = useState(searchParams.get("map") ?? "");
  const [decompressed, setDecompressed] = useState("");

  const handleValueUpdate = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleMapUpdate = (e: ChangeEvent<HTMLInputElement>) =>
    setMap(e.target.value);

  const createDecompression = () => {
    const res = decompress(value, map);
    setDecompressed(res);
  };

  return (
    <Container
      style={{
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 40,
      }}
    >
      <Typography variant={"h3"} textAlign={"center"}>
        Pattern Decompression
      </Typography>
      <TextField
        style={{ marginTop: 50, width: "80%" }}
        multiline={true}
        placeholder={"Enter text to decompress"}
        onChange={handleValueUpdate}
        value={value}
      />
      <TextField
        style={{ marginTop: 50, width: "80%" }}
        multiline={true}
        placeholder={"Enter map"}
        onChange={handleMapUpdate}
        value={map}
      />
      <Button
        variant="contained"
        style={{ marginTop: 40 }}
        disabled={value == ""}
        onClick={createDecompression}
      >
        Decompress
      </Button>

      {decompressed && (
        <>
          <Divider
            orientation="horizontal"
            variant="middle"
            flexItem
            style={{ marginTop: 40, marginBottom: 40 }}
          />
          <Typography variant={"h4"} textAlign={"center"}>
            Decompressed Text
          </Typography>
          <TextField
            style={{ marginTop: 50, width: "80%", textAlign: "center" }}
            multiline={true}
            value={decompressed}
            inputProps={{ style: { textAlign: "center" } }}
          />
          <Link
            href={`/pattern/compression?text=${decompressed}`}
            marginTop={10}
          >
            Compress Text
          </Link>
        </>
      )}
      <Footer />
    </Container>
  );
};

export default PatternDecompression;
