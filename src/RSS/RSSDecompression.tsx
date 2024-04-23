import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { decompress } from "./compression";
import { useSearchParams } from "react-router-dom";
import Link from "@mui/material/Link";
import Footer from "../Footer";

const RSSDecompression = () => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("text") ?? "");
  const [error, setError] = useState("");
  const [decompressed, setDecompressed] = useState("");

  useEffect(() => {
    const regex = new RegExp("^[a-j]([0-9]|[a-j])*$");
    if (regex.test(value)) setError("");
    else setError("Must sure it is a valid SRS compressed text.");
  }, [value]);

  const handleValueUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const createDecompression = () => {
    const res = decompress(value);
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
        Repetitive Sequence Suppression Decompression
      </Typography>
      <TextField
        style={{ marginTop: 50, width: "80%" }}
        multiline={true}
        placeholder={"Enter text to decompress"}
        onChange={handleValueUpdate}
        error={error !== ""}
        helperText={error}
        value={value}
      />
      <Button
        variant="contained"
        style={{ marginTop: 40 }}
        disabled={error !== "" || value == ""}
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
          <Link href={`/rss/compression?text=${decompressed}`} marginTop={10}>
            Compress Text
          </Link>
        </>
      )}
      <Footer />
    </Container>
  );
};

export default RSSDecompression;
