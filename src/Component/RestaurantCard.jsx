import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const RestaurantCard = ({ menuData,restaurantName,restaurantId }) => {
  const navigate=useNavigate()
  const { name, imgSrc, price, qty } = menuData;
  

  return (
    <>
      <Card sx={{ width: 250,margin:5 }} onClick={()=>navigate(`restaurant-detail/${restaurantId}`)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={imgSrc}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Rs.{price} for {qty}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {restaurantName}
            </Typography>
           
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
