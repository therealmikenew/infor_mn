import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import "./App.css";
import Results from "./components/Results";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  // useEffect(() => {
  //   const displayResults = async () => {
  //     try {
  //       const resp = await axios.get(
  //         "https://www.googleapis.com/books/v1/volumes?q=jeff"
  //       );
  //       console.log(resp.data.items);
  //     } catch (error) {
  //       console.log("Couldn't find that query");
  //     }
  //   };
  //   displayResults();
  // }, []);

  return (
    <Container
      className="App"
      maxWidth="lg"
      sx={{
        bgcolor: "#cfe8fc",
        height: "50vh",
        marginY: 5,
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Box>
        <Search query={query} setQuery={setQuery} />
      </Box>
      <Box>
        <Results />
      </Box>
    </Container>
  );
}

export default App;
