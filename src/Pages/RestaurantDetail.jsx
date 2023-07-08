import { useParams } from "react-router-dom";

import { useDataContext } from "../Context/DataContext";
import { Avatar, Box, Button, Divider, Paper, Typography } from "@mui/material";
import { RatingFormModal } from "../Component/RatingFormModal";

export const RestaurantDetail = () => {
  const { dataState } = useDataContext();
  const { id } = useParams();

  const selectedRestaurant = dataState?.restaurantData?.find(
    (data) => data?.id === Number(id)
  );

  const {
    name,
    cuisine_id,
    address,
    phone,
    menu,
    ratings,
    description,
  } = selectedRestaurant;

  const averageRating=ratings.reduce((total,crr)=>total=total+crr.rating,0)/ratings.length

  return (
    <Box className="DetailsContainer" sx={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <Paper sx={{width:"600px",padding:"10px"}} >
      <Box className="CardHeader">
          <Typography variant="h3">{name}</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography variant="body2" color="text.secondary">
                {menu.map(({name})=>`${name}, `)}
            </Typography>
            <RatingFormModal restaurantId={selectedRestaurant?.id}/>
            
            </Box>
            <Typography variant="body2" color="text.secondary">
                {address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Average Rating:{averageRating}
            </Typography>
        <Divider/>
        <Box className="CardBody">
        <Typography variant="h5">Reviews</Typography>
        <Box className="reviewContainer">
          {
            ratings?.map(ratingData=>{
              return(
                <Box className="ratingCard" sx={{width:"100%",height:"70px"}}>
                  <Box className="ratingCardHeader" sx={{display:"flex",justifyContent:"space-between"}}>
                  <span style={{display:"flex"}} >
                  <Avatar alt={ratingData?.revName} src={ratingData?.pp} />
                  <Typography>{ratingData?.revName}</Typography>
                  </span>
                  <Box className="ratingBox" sx={{height:"20px",width:"30px",backgroundColor:"green",color:"white",textAlign:"center"}}>
                  {ratingData?.rating}

                  </Box>
                  </Box>
                  <Box className="ratingCardFooter">
                  <Typography>{ratingData?.comment}</Typography>
                  </Box>
                  <Divider/>
                </Box>
              )
            })
          }
        </Box>

        </Box>
      </Paper>
    </Box>
  );
};
