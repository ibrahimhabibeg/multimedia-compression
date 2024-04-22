import { Card, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
        Loseless Compression Algorithms Project
      </Typography>
      <Card
        onClick={() => navigate("/rss/compression")}
        style={{
          marginTop: 40,
          width: "80%",
          height: 250,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .6s",
          borderRadius: 30,
        }}
        sx={{
          ":hover": {
            backgroundColor: "#0284c7",
          },
        }}
        elevation={3}
      >
        <Typography variant={"h5"} textAlign={"center"}>
          Repetitive Sequence Suppression
        </Typography>
      </Card>
      <Card
        onClick={() => navigate("/rle/compression")}
        style={{
          marginTop: 40,
          width: "80%",
          height: 250,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .6s",
          borderRadius: 30,
        }}
        sx={{
          ":hover": {
            backgroundColor: "#0284c7",
          },
        }}
        elevation={3}
      >
        <Typography variant={"h5"} textAlign={"center"}>
          Run-Length Encoding
        </Typography>
      </Card>
      <Card
        onClick={() => navigate("/pattern/compression")}
        style={{
          marginTop: 40,
          width: "80%",
          height: 250,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .6s",
          borderRadius: 30,
        }}
        sx={{
          ":hover": {
            backgroundColor: "#0284c7",
          },
        }}
        elevation={3}
      >
        <Typography variant={"h5"} textAlign={"center"}>
          Pattern Substitution
        </Typography>
      </Card>
      <Card
        onClick={() => navigate("/sf/compression")}
        style={{
          marginTop: 40,
          width: "80%",
          height: 250,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .6s",
          borderRadius: 30,
        }}
        sx={{
          ":hover": {
            backgroundColor: "#0284c7",
          },
        }}
        elevation={3}
      >
        <Typography variant={"h5"} textAlign={"center"}>
          Shannon-Fano Algorithm
        </Typography>
      </Card>
      <Card
        onClick={() => navigate("/huffman/compression")}
        style={{
          marginTop: 40,
          width: "80%",
          height: 250,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .6s",
          borderRadius: 30,
        }}
        sx={{
          ":hover": {
            backgroundColor: "#0284c7",
          },
        }}
        elevation={3}
      >
        <Typography variant={"h5"} textAlign={"center"}>
          Huffman Coding
        </Typography>
      </Card>
    </Container>
  );
};

export default Home;
