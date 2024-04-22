import {
  Button,
  Container,
  Divider,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { compress } from "./compression";
import { useSearchParams } from "react-router-dom";
import Footer from "../Footer";

const HuffmanCompression = () => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("text") ?? "");
  const [compressed, setCompressed] = useState("");
  const [compressedMap, setCompressedMap] = useState("");
  const [saving, setSaving] = useState(0);

  const handleValueUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const createCompression = () => {
    const { compressed: res, map } = compress(value);
    console.log(res);
    setCompressed(res);
    setCompressedMap(map);
    setSaving(Math.round((1 - res.length / 8 / value.length) * 100));
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
        Huffman Compression
      </Typography>
      <TextField
        style={{ marginTop: 50, width: "80%" }}
        multiline={true}
        placeholder={"Enter text to compress"}
        onChange={handleValueUpdate}
        value={value}
      />
      <Button
        variant="contained"
        style={{ marginTop: 40 }}
        disabled={value == ""}
        onClick={createCompression}
      >
        Compress
      </Button>

      {compressed && (
        <>
          <Divider
            orientation="horizontal"
            variant="middle"
            flexItem
            style={{ marginTop: 40, marginBottom: 40 }}
          />
          <Typography variant={"h4"} textAlign={"center"}>
            Compressed Text
          </Typography>
          <TextField
            style={{
              marginTop: 40,
              width: "80%",
              textAlign: "center",
              marginBottom: 50,
            }}
            multiline={true}
            value={compressed}
            inputProps={{ style: { textAlign: "center" } }}
          />
          <Typography variant={"h4"} textAlign={"center"}>
            Map
          </Typography>
          <TextField
            style={{ marginTop: 40, width: "80%", textAlign: "center" }}
            multiline={true}
            value={compressedMap}
            inputProps={{ style: { textAlign: "center" } }}
          />
          <Typography
            variant={"h5"}
            textAlign={"center"}
            style={{ marginTop: 30 }}
          >
            You saved{" "}
            <span
              style={saving >= 5 ? { color: "lightgreen" } : { color: "red" }}
            >
              {saving}%
            </span>
          </Typography>
          <Link
            href={`/huffman/decompression?text=${compressed}&map=${compressedMap}`}
            marginTop={10}
          >
            Decompress Text
          </Link>
        </>
      )}
      <Footer />
    </Container>
  );
};

export default HuffmanCompression;
