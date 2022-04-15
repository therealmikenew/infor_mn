import { useState } from "react";
import { Container, Box } from "@mui/material";
import "./App.css";
import Results from "./components/Results";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");

  const displayResults = async () => {
    if (query) {
      try {
        const resp = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}`
        );
        console.log(resp.data.items);
      } catch (error) {
        console.log("Couldn't find that query");
      }
    } else {
      console.log("Enter query");
    }
  };

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
        <Search
          query={query}
          setQuery={setQuery}
          displayResults={displayResults}
        />
      </Box>
      <Box>
        <Results />
      </Box>
    </Container>
  );
}

export default App;
