const express=require("express");
const router=express.Router();
const Book=require("../models/Book");
const bookscontroller=require("../controllers/books-controller");



router.get("/",bookscontroller.getallbooks);
router.post("/",bookscontroller.addbook);
router.get("/:id",bookscontroller.getbyid);
router.put("/:id",bookscontroller.updatebook);
router.delete("/:id",bookscontroller.deletebook);
module.exports= router;