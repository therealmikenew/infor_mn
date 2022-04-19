import { Card, CardMedia, Typography, List, ListItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BookCard = () => {
  let navigate = useNavigate()

  return (
    <Card sx={{ height: 200 }}>
      <Typography>BookCard</Typography>
      <Button 
        sx={{marginLeft: 1, marginTop: 1}}
        onClick={()=> (navigate("/"))}
        variant="contained">Back to Main Page
      </Button>
    </Card>
  );
};

export default BookCard;
