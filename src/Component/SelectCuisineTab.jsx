import {
  Box,
  Button,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

import { useDataContext } from "../Context/DataContext";

export const SelectCuisineTab = () => {
  const { dataState, setSelectedCuisine, selectedCuisine } = useDataContext();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Select Your Cuisine</Typography>

        <Stack direction="row" spacing={2}>
          {dataState?.cuisineData.map((typeOfCuisine) => (
            <Button
              onClick={() => setSelectedCuisine(typeOfCuisine)}
              variant="contained"
              color={
                selectedCuisine?.name === typeOfCuisine?.name
                  ? "peace"
                  : "anger"
              }
              sx={{ color: "white" }}
            >
              {typeOfCuisine?.name}
            </Button>
          ))}
        </Stack>
      </Box>
    </>
  );
};
