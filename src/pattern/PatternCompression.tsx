import {
  Button,
  Container,
  Divider,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { compress, replacement } from "./compression";
import { useSearchParams } from "react-router-dom";

const PatternCompression = () => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("text") ?? "");
  const [compressed, setCompressed] = useState("");
  const [compressedMap, setCompressedMap] = useState("");
  const [saving, setSaving] = useState(0);
  const [error, setError] = useState("");

  const handleValueUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const createCompression = () => {
    const { compressed: res, map } = compress(value);
    setCompressed(res);
    setCompressedMap(map);
    setSaving(Math.round((1 - res.length / value.length) * 100));
  };

  useEffect(() => {
    let msg = "";
    for (const r of replacement) {
      if (value.includes(r)) {
        msg = `Text can't contain special character ${r}`;
        break;
      }
    }
    setError(msg);
  }, [value]);

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
        Pattern Compression
      </Typography>
      <TextField
        style={{ marginTop: 50, width: "80%" }}
        multiline={true}
        placeholder={"Enter text to compress"}
        onChange={handleValueUpdate}
        value={value}
        error={error !== ""}
        helperText={error}
      />
      <Button
        variant="contained"
        style={{ marginTop: 40 }}
        disabled={error !== "" && value == ""}
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
          <Link href={`/pattern/decompression?text=${compressed}&map=${compressedMap}`} marginTop={10}>
            Decompress Text
          </Link>
        </>
      )}
    </Container>
  );
};

export default PatternCompression;
