const path = require('path');
const express = require('express');
const multer = require('multer');
const router=express.Router();
const Book=require("../models/Book");
const bookscontroller=require("../controllers/books-controller");
const {fileURLToPath}=require('url');

router.get("/",bookscontroller.getallbooks);
router.post("/",async(req,res)=>{
    let book;
    try{
        console.log(req.body);
      const {name,author,description,image}=req.body;
        book=new Book({
            name,
            author,
            description,
            image

        });
        await book.save();
    }
    catch(err){
       console.log(err);
    }
    if(!book){
        return res.status(500).json({message:"unamble to add"});
    }
    return res.status(201).json(book);
}
);


router.get("/:id",bookscontroller.getbyid);
router.put("/:id",bookscontroller.updatebook);
router.delete("/:id",bookscontroller.deletebook);
module.exports= router;
// console.log(__dirname);