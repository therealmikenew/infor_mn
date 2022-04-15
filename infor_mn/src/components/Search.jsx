import { TextField, Button, Box } from "@mui/material"

const Search = ({query, setQuery, displayResults}) => {
    return (
    <Box >
      <TextField 

        id="filled-search"
        label="Search..."
        type="search"
        variant="filled"
        value={query}
        onChange={(e)=> setQuery(e.target.value) }
      />
      <Button onClick={displayResults}
      variant="contained">Search</Button>

    </Box>
    )
    
}

export default Search