
import { Routes,Route } from 'react-router-dom'
import {Home} from "../Pages/Home";
import {RestaurantDetail} from "../Pages/RestaurantDetail"
export const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="restaurant-detail/:id" element={<RestaurantDetail/>}/>
   </Routes>
  )
}
