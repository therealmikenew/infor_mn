import { TextField, Button, Box } from "@mui/material"

const Search = ({query, setQuery, displayResults}) => {
    return (
    <Box padding={10}>
      <TextField 
        
        id="filled-search"
        label="Search..."
        type="search"
        variant="filled"
        onChange={(e)=> setQuery(e.target.value) }
      />
      <Button sx={{marginLeft: 1, marginTop: 1}}onClick={displayResults}
      variant="contained">Search</Button>

    </Box>
    )
    
}

export default Search