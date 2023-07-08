import { cuisineData, restaurantsData } from "../Data/RestaurantData";

export const initialState = {
  cuisineData: [...cuisineData],
  restaurantData: [...restaurantsData],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "ADD-REVIEW":
      
      const updatedRestaurantData = state.restaurantData.map((data) =>
        data.id === action.payload.selectedRestaurant
          ? { ...data, ratings: [...data.ratings, action.payload.userFeedback] }
          : data
      );
    

      return { ...state, restaurantData: updatedRestaurantData };

    default:
      break;
  }
};
