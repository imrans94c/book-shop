import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Header/Banner";
import Books from "../Components/Books";

const Home = () => {
  const booksData = useLoaderData();
  const books = booksData.books;
  console.log(books);
  return (
    <div>
      <Banner></Banner>
      <Books books={books}></Books>
    </div>
  );
};

export default Home;
