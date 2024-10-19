import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredListId } from "../Utility/LocalStorage";
import ListBookCard from "../Components/ListBookCard";

const ListedBooks = () => {
  const data = useLoaderData();
  const books = data.books;
  //const [tabIndex, setTabIndex] = useState(0);
  const [readBook, setReadBook] = useState([]);
  const [wishBook, setWishBook] = useState([]);

  //const [ratings, setRatings] = useState([]);
  //const [numbersOfPage, setNumbersOfPage] = useState([]);
  
  // const handleJobsFilter = filter =>
  //   {
  //     if(filter === 'rating'){
  //       setRatings()
  //     }
  //   }

  useEffect(() => {
    const storedReadBooksIds = getStoredListId("read-list");
    const storedWishBooksIds = getStoredListId("wish-list");
    // setReadBook(storedReadBooksIds);
    // setWishBook(storedWishBooksIds);

    if(books.length > 0){
      const readBooks = [];
      for(const bookId of storedReadBooksIds){
        const readBook = books.find(rBook => rBook.bookId === bookId);
        if(readBook){
          readBooks.push(readBook);
      }
        console.log("ReadBook = ",readBooks);
        setReadBook(readBooks);
      }
    }

    if(books.length > 0){
      const wishBooks = [];
      for(const bookId of storedWishBooksIds){
        const wishBook = books.find(wBook => wBook.bookId === bookId);
        if(wishBook){
          wishBooks.push(wishBook);
          console.log("WishBook =", wishBooks);
          setWishBook(wishBooks);
        }
      }
    }

  }, [books]);

  

  return (
    <div>
      <div className="bg-slate-100 w-full h-20 rounded-xl flex justify-center items-center">
        <h2 className="font-bold text-xl">Books</h2>
      </div>
      <div className="flex justify-center items-center mt-5">
        <details className="dropdown">
          <summary className="btn m-1 font-bold bg-[#23BE0A] text-white">
            Sort By{" "}
            <span className="font-bold text-2xl text-center pb-2">⌵</span>
          </summary>
          {/* <ul className="menu dropdown-content bg-base-200 rounded-box z-[1] w-32  shadow">
                      <li onClick={() => handleJobsFilter('rating')}><a>Rating</a></li>
                      <li onClick={() => handleJobsFilter('numberOfPages')}><a>Number of Pages</a></li>
                      <li onClick={() => handleJobsFilter('publisher year')}><a>Publisher Year</a></li>
                  </ul> */}
        </details>
      </div>

      {/* Tabs */}

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
             {readBook?.map((rBook, idx) => <ListBookCard key={idx} rBook={rBook}></ListBookCard>)}           
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wish Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
          {wishBook?.map((wBook, idx) => <ListBookCard key={idx} rBook={wBook}></ListBookCard>)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
