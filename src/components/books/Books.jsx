import { useEffect, useState } from "react";
import Book from "./book/Book";


const Books = () => {


    const [books,setBooks]=useState([])

   

   useEffect(()=>{
    
    fetch('/blog.json')
    .then(res=>res.json())
    .then(data=>setBooks(data))
   },[])




    return (
  <div>
    <h2 className="text-center font-bold text-3xl pb-4">Book</h2>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    {
        books.map(book=> <Book book={book} key={book.id}></Book>)
    }
   </div>
  </div>
    );
};

export default Books;