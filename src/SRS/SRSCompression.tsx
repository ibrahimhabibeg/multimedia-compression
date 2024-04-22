import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { compress } from "./compression";

const SimpleRepetitionSuppression = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [compressed, setCompressed] = useState("");
  const [saving, setSaving] = useState(0);

  const handleValueUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    const regex = new RegExp("^[0-9]*$");
    if (regex.test(newValue)) setError("");
    else setError("Must contain only numbers.");
  };

  const createCompression = () => {
    const res = compress(value);
    setCompressed(res);
    setSaving(Math.round((1 - res.length / value.length) * 100));
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
        Simple Repetition Suppression Compression
      </Typography>
      <TextField
        style={{ marginTop: 50, width: "80%" }}
        multiline={true}
        placeholder={"Enter text to compress"}
        onChange={handleValueUpdate}
        error={error !== ""}
        helperText={error}
        value={value}
      />
      <Button
        variant="contained"
        style={{ marginTop: 40 }}
        disabled={error !== "" || value == ""}
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
            style={{ marginTop: 50, width: "80%", textAlign: "center" }}
            multiline={true}
            value={compressed}
            inputProps={{style: { textAlign: 'center' }}}
          />
          <Typography
            variant={"h5"}
            textAlign={"center"}
            style={{ marginTop: 30 }}
          >
            You saved{" "}
            <span
              style={saving >= 25 ? { color: "lightgreen" } : { color: "red" }}
            >
              {saving}%
            </span>
          </Typography>
        </>
      )}
    </Container>
  );
};

export default SimpleRepetitionSuppression;
