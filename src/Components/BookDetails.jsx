import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BookDetailsCard from "./BookDetailsCard";

const BookDetails = () => {
  const {bookId} = useParams();
  console.log("param id",bookId);
  const booksData = useLoaderData();
  const books = booksData.books;
  console.log(books);
  const [book, setBook] = useState({});




  useEffect(() => {
    const findBook = books?.find(book => book.bookId === parseInt(bookId));
    setBook(findBook);
    console.log("find",findBook);
   
  }, [bookId, books]);
  console.log("new",book);

  return (
    <div>
        {
            <BookDetailsCard book={book}></BookDetailsCard>
        }
    </div>
  );
};

export default BookDetails;
