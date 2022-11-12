import './App.css';
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Addbook from "./components/Addbook";
import Books from "./components/Book/Books.jsx";
import About from "./components/About";
import Bookdetail from "./components/Book/Bookdetails";
import Openbook from "./components/Book/Openbook";
function App() {
  return (
    <>
     
      <header>
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/add" element={<Addbook/>} exact/>
            <Route path="/books" element={<Books/>} exact/>
            <Route path="/about" element={<About/>} exact/>
            <Route path="/books/:id" element={<Bookdetail/>} exact/>
            <Route path="/books/book/:filename" element={<Openbook  />} exact/>
          </Routes>
        </main>

      
      
    </>
  );
}

export default App;
