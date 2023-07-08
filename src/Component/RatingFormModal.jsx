import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDataContext } from "../Context/DataContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
    height:300,
  bgcolor: "red",
  color:"white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
  textAlign: "center",
  borderRadius:"15px"
};

export const RatingFormModal = ({restaurantId}) => {
    const{dataDispatch,dataState}=useDataContext()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);
setUserInput({rating:"",comment:"",pp:"https://res.cloudinary.com/dqlasoiaw/image/upload/v1686659910/tech-social/photo-1566753323558-f4e0952af115_cocrd5.jpg",revName:"Raj"})};
  
  //state to handel userData
  const [userInput,setUserInput]=useState({rating:"",comment:"",pp:"https://res.cloudinary.com/dqlasoiaw/image/upload/v1686659910/tech-social/photo-1566753323558-f4e0952af115_cocrd5.jpg",revName:"Raj"});
 

  const handleRatingChange = (event) => {
    setUserInput(prev=>({...prev,rating:event.target.value}));
  };
  const handleCommentChange=(text)=>{
    setUserInput(prev=>({...prev,comment:text}));

  }
  const submitComment=()=>{
    console.log(userInput)
    if(userInput.rating==="" || userInput.comment===""){
        alert("Invalid data")
    }
    else{
        dataDispatch({
            type:"ADD-REVIEW",
            payload:{
                selectedRestaurant:restaurantId,
                userFeedback:userInput
            }
        })
        handleClose()
    }
}
  
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="anger"
        sx={{ color: "white" }}
      >
        Add Review
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box className="ModalHeader" sx={{marginBottom:"25px"}}>
            <Typography variant="h4">Add Your Review</Typography>
          </Box>
          <Box className="ModalBody">
          <Box
              className="ratingSection"
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Typography>Rating:</Typography>

        <FormControl   sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Rating</InputLabel>
        <Select
          
          value={userInput?.rating}
          label="Age"
          onChange={handleRatingChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>   
            </Box>
            <Box
              className="commentSection"
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Typography>Comment:</Typography>
              <TextField
                id="standard-multiline-static"
                placeholder="Add Review"
                multiline
                rows={2}
                value={userInput?.comment}
                onChange={(e)=>handleCommentChange(e.target.value)}
              />
            </Box>
          </Box>
          <Button onClick={()=>submitComment()}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
};
