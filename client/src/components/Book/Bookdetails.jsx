import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Bookdetails() {
    const history=useNavigate();
    const [inputs,setinputs]=useState({});
    const [checked,setchecked]=useState(false);
    const id=useParams().id;
    useEffect(()=>{
          const fetchhandler=async()=>{
              await axios.get(`http://localhost:3001/books/${id}`).then((res)=>res.data).then(data=>setinputs(data.book));
          }
          fetchhandler();
    },[id]);
 
    const sendrequest=async()=>{
        await axios.put(`http://localhost:3001/books/${id}`,{
            name:String(inputs.name),
            author:String(inputs.author),
            description:String(inputs.description),
            price:Number(inputs.price),
            image:String(inputs.image),
            available:Boolean(checked)
        }).then(res=>res.data)
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        sendrequest().then(()=>history("/books"));
    }
    const handlechange=(e)=>{
        setinputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
          }));
    }
  return (
    <div>
        {inputs &&  <form onSubmit={handlesubmit}>
            <Box
            display="flex" 
            flexDirection="column" 
            justifyContent={'center'} 
            maxWidth={600} 
            alignContent={"center"} 
            alignSelf="center" 
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={2}
            >
            <FormLabel>Name</FormLabel>
            <TextField value={inputs.name} onChange={handlechange} margin="normal"  fullWidth variant="outlined" name="name" />
            <FormLabel>Author</FormLabel>
            <TextField value={inputs.author} onChange={handlechange} margin="normal" fullWidth variant="outlined" name="author" />
            <FormLabel>Description</FormLabel>
            <TextField value={inputs.description} onChange={handlechange} margin="normal" fullWidth variant="outlined" name="description" />
            <FormLabel>Price</FormLabel>
            <TextField value={inputs.price} onChange={handlechange} margin="normal" type="number" fullWidth variant="outlined" name="price" />
            <FormLabel>Image</FormLabel>
            <TextField value={inputs.image} onChange={handlechange} margin="normal"  fullWidth variant="outlined" name="image" />
            <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setchecked(!checked)}/>} label="Availble"/> 
            <Button variant="contained" type="submit" >Update Book</Button>

            </Box>

            </form>
            }
     
    </div>
  )
}
