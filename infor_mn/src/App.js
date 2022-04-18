import { useState } from "react";
import { Container, Box } from "@mui/material";
import "./App.css";
//import Results from "./components/Results";
import Search from "./components/Search";
//import Pages from "./components/Pages";
//import BookTable from "./components/BookTable";
import BookGrid from "./components/BookGrid";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const displayResults = async () => {
    const cachedResult = JSON.parse(localStorage.getItem(query));

    if (cachedResult) {
      setResults(cachedResult.data.items);
    } else {
      if (query) {
        try {
          const resp = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5`
          );
          setResults(resp.data.items);
          localStorage.setItem(query, JSON.stringify(resp));
          // to clear cache
          //localStorage.clear();
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
        <BookGrid results={results} />
      </Box>
      {/* <Box>
        <BookTable results={results} />
      </Box> */}
      {/* <Box>
        <Results results={results} />
      </Box> */}
      {/* <Pages /> */}
    </Container>
  );
}

export default App;
