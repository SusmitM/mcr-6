import { Box, Divider, Typography } from "@mui/material";
import { SelectCuisineTab } from "../Component/SelectCuisineTab";
import { useDataContext } from "../Context/DataContext";
import { RestaurantCard } from "../Component/RestaurantCard";

export const Home = () => {
  const { dataState, selectedCuisine } = useDataContext();

  const availableRestaurants = dataState?.restaurantData?.filter(
    ({ cuisine_id }) => cuisine_id === selectedCuisine?.id
  );
  

  return (
    <>
      <Box className="HomeContainer"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap:"4rem"
        }}
      >
        <Typography variant="h3">Food Ordering App</Typography>
       
      <SelectCuisineTab />
      <Box className="DisplayContainer">
        {
          availableRestaurants?.length===0 && <Typography>Please select a Cuisine Type</Typography>
        }
         {
          availableRestaurants?.length>0 && 
            availableRestaurants?.map(restaurantsData =>{
              return (
                <>
                <Typography variant="h5">Dishes by {restaurantsData?.name}</Typography>
                <hr/>
                <Box className="menuItemContainer" sx={{display:"flex",flexWrap:"wrap"}}>
                {
                  restaurantsData?.menu?.map((menuData)=>{
            
                    return(
                      <RestaurantCard menuData={menuData} restaurantName={restaurantsData?.name} restaurantId={restaurantsData?.id}/>
                    )
                  } )
                }
                </Box>
                
                </>
              )
            }
             
              )

          
        }
      </Box>
      </Box>
    </>
  );
};
