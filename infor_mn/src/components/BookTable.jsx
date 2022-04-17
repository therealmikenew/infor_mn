import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

const BookTable = ({results}) => {
    console.log(results)


    return (
        <TableContainer>
            <Table sx={{mindWidth: 700}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Retail Price</TableCell>
                        <TableCell>Page Count</TableCell>
                        <TableCell>Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {results.map((res, idx)=> (
                        <TableRow
                        key={idx}
                        sx={{'&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {res.volumeInfo.title}
                            </TableCell>
                            <TableCell>{res.volumeInfo.authors}</TableCell>
                            <TableCell>{res.saleInfo.saleability === "FOR_SALE" ? (res.saleInfo.retailPrice.amount): (<Typography>No price listed</Typography>)}</TableCell>
                            <TableCell>{res.volumeInfo.pageCount}</TableCell>
                            <TableCell>{res.volumeInfo.categories}</TableCell>



                        </TableRow>
                    ))}
                </TableBody>

            </Table>


        </TableContainer>
    )


}

export default BookTable