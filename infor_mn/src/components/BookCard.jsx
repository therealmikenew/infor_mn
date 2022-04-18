import { Card, CardMedia, Typography, List, ListItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BookCard = () => {
  let navigate = useNavigate()

  return (
    <Card sx={{ height: 200 }}>
      <Typography>BookCard</Typography>
      <Button sx={{marginLeft: 1, marginTop: 1}}onClick={()=> (navigate("/"))}
      variant="contained">Back to Main Page</Button>
      {/* <CardMedia
        component="img"
        height="50"
        image={res.volumeInfo.imageLinks.smallThumbnail}
        alt="book image"
      ></CardMedia>
      <Typography>{res.volumeInfo.title}</Typography>
      {res.saleInfo.retailPrice ? (
        <Typography>
          Retail price: ${res.saleInfo.retailPrice.amount}
        </Typography>
      ) : (
        <Typography>No amount listed</Typography>
      )}
      <List>
        {res.volumeInfo.authors.map((author, idx) => (
          <ListItem key={idx}>{author}</ListItem>
        ))}
      </List>
      <Typography>{res.volumeInfo.pageCount}</Typography> */}
    </Card>
  );
};

export default BookCard;
