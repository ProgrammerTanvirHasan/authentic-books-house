

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataFromStorage } from "../../utility/localStorage";
import BooksCard from "../card/BooksCard";



const ListedBook = () => {
  const books = useLoaderData();
  const [readBook, setReadBook] = useState([]);
  const [wishListBook, setWishListBook] = useState([]);
  const [displayBook, setDisplayBook] = useState([]);

  // 2 no step 2 dhoroner filter ba short kora/////////////////////////////////////////////////////////


  const showReadBooks = () => {
    setDisplayBook(readBook);
  };

  const showWishlistBooks = () => {
    setDisplayBook(wishListBook);
  };

  const showAllBooks = () => {
    setDisplayBook([...readBook, ...wishListBook]);
  };



  const handleBookFilter = (filter) => {
    let totalBooks = [...readBook, ...wishListBook];
  
    let sortedBooks = [...totalBooks];
  
    if (filter === 'rating') {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (filter === 'pages') {
      sortedBooks.sort((a, b) => b.numberOfPages - a.numberOfPages);
    } else if (filter === 'year') {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
  
    setDisplayBook(sortedBooks);
  };
  



// 1st step useEffect shob data gula get kore//////////////////////////////////.filter kore state a set kora


  useEffect(() => {
    const readBooksFromStorage = getDataFromStorage('read');
    const wishlistBooksFromStorage = getDataFromStorage('wishlist');

    if (books.length > 0) {
      const listedReadBooks = books.filter(book => readBooksFromStorage.includes(book.id));
      const listedWishlistBooks = books.filter(book => wishlistBooksFromStorage.includes(book.id));
      setReadBook(listedReadBooks);
      setWishListBook(listedWishlistBooks);
      setDisplayBook([...listedReadBooks, ...listedWishlistBooks]);
    }
  }, [books]);




  return (
    <div className="w-[95%] mx-auto">
      <h2 className="text-3xl font-bold text-center mt-4 mb-8">Books</h2>

      <div className="lg:flex justify-around">
        <div className="lg:flex gap-8">
          <button onClick={showAllBooks} className="btn btn-outline">All Books</button>
          <button onClick={showReadBooks} className="btn btn-outline btn-primary">Read Books</button>
          <button onClick={showWishlistBooks} className="btn btn-outline btn-success">Wishlist</button>
        </div>
        <div>
          <div className="text-center mb-44">
            <details className="dropdown">
              <summary className="btn m-7 text-2xl font-bold bg-lime-500">Sort By</summary>
              <ul className="menu flex justify-end dropdown-content bg-slate-200 w-52 pl-16 shadow-2xl rounded-lg">
                <li className="text-lg"><a onClick={() => handleBookFilter('rating')}>Rating</a></li>
                <li className="text-lg"><a onClick={() => handleBookFilter('pages')}>Pages</a></li>
                <li className="text-lg"><a onClick={() => handleBookFilter('year')}>Published Year</a></li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-8">
          {displayBook.map((card,index) => (
            <BooksCard key={`${card.id}-${index}`} card={card} />
          ))}
        </div>
     
              
      </div>
    
    </div>
  );
};

export default ListedBook;


