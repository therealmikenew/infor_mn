import { Container, Box } from "@mui/material";
import "./App.css";
import Results from "./components/Results";
import Search from "./components/Search";

function App() {
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
        <Search />
      </Box>
      <Box>
        <Results />
      </Box>
    </Container>
  );
}

export default App;
