import { Card, CardMedia, Typography, List, ListItem } from "@mui/material";

const BookCard = ({ res }) => {
  return (
    <Card sx={{ height: 200 }}>
      <CardMedia
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
      <Typography>{res.volumeInfo.pageCount}</Typography>
    </Card>
  );
};

export default BookCard;
