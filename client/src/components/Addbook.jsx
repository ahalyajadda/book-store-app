import React, { useState } from 'react';
import {FormLabel,TextField,Box, Button, FormControlLabel, Checkbox} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export default function Addbook() {
  const history=useNavigate();
  const [inputs,setinputs]=useState({
    name:'',
    description:'',
    image:'',
    price:'',
    author:''
  });
  const [checked,setchecked]=useState(false);

  const handlechange=(e)=>{
      setinputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }));
  }
  const sendrequest=async()=>{
    await axios.post("http://localhost:3001/books",{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
    }).then((res=>res.data));

  }
  const handlesubmit=(e)=>{ 
    e.preventDefault();
    // console.log(inputs,checked);
    sendrequest().then(()=>history('/books'));

  }

  return (
    <form onSubmit={handlesubmit}>
          <Box 
          display="flex" 
          flexDirection="column" 
          justifyContent={'center'} 
          maxWidth={500} 
          alignContent={"center"} 
          alignSelf="center" 
          marginLeft={"auto"}
           marginRight={"auto"}
           marginTop={2}
           >
          <FormLabel>Name</FormLabel>
          <TextField value={inputs.name} style={{}} onChange={handlechange} margin="normal"  fullWidth variant="outlined" name="name" />
          <FormLabel>Author</FormLabel>
          <TextField value={inputs.author} onChange={handlechange} margin="normal" fullWidth variant="outlined" name="author" />
          <FormLabel>Description</FormLabel>
          <TextField value={inputs.description} onChange={handlechange} margin="normal" fullWidth variant="outlined" name="description" />
          <FormLabel>Price</FormLabel>
          <TextField value={inputs.price} onChange={handlechange} margin="normal" type="number" fullWidth variant="outlined" name="price" />
          <FormLabel>Image</FormLabel>
          <TextField value={inputs.image} onChange={handlechange} margin="normal"  fullWidth variant="outlined" name="image" />
         <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setchecked(!checked)}/>} label="Availble"/> 
          <Button variant="contained" type="submit" >Add Book</Button>

      </Box>
    
    </form>
  )
}
