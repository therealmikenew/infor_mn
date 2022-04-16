import {Box} from "@mui/material"
import BookCard from "./BookCard"

const Results = ({results}) => {
    console.log(results)
    return (
        <Box>Results
            {results.map((res, idx)=> (<BookCard key={idx} res={res}/>))}
            
        </Box>
    )
    
    }


export default Results