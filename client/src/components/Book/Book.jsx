import React from 'react'
import { Button } from '@mui/material';
import "./book.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import  {useNavigate} from "react-router-dom";
export default function Book(props) {
  const history =useNavigate();
    const {_id,name,author,description,image}=props.book;
  const deletehandler=async()=>{
      await axios.delete(`http://localhost:3001/books/${_id}`)
      .then(res=>res.data)
      .then(()=>window.location.reload(true))
      .then(()=>history("/books"));
  }

  return (
    <div className='card'>
        <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <Button LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
      <Button onClick={deletehandler}>Delete</Button>
    </div>
  )
}
