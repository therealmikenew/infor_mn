import { useState } from "react";
import { Container, Box } from "@mui/material";
import "./App.css";
import Search from "./components/Search";
import BookGrid from "./components/BookGrid";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");

  const displayResults = async () => {
    setQuery(query.replaceAll(" ", "%20"));
    const cachedResult = JSON.parse(localStorage.getItem(query));

    if (cachedResult) {
      setResults(cachedResult.data.items);
    } else {
      if (query) {
        try {
          const resp = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
          );
          setResults(resp.data.items);
          localStorage.setItem(query, JSON.stringify(resp));
        } catch (error) {
          console.log("Couldn't find that query");
        }
      } else {
        console.log("Enter query");
      }
    }
  };

  return (
    <Container
      className="App"
      maxWidth="lg"
      sx={{
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
      {results ? <BookGrid results={results} /> : null}
    </Container>
  );
}

export default App;
