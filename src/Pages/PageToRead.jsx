import { useEffect, useState } from "react";
import { getStoredListId } from "../Utility/LocalStorage";
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid } from "recharts";
import { useLoaderData } from "react-router-dom";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
const colors = scaleOrdinal(schemeCategory10).range();

const PageToRead = () => {
  const data = useLoaderData();
  const books = data.books;

  const [readBook, setReadBook] = useState([]);

  useEffect(() => {
    const storedReadBooksIds = getStoredListId("read-list");

    if (books.length > 0) {
      const readBooks = [];
      for (const bookId of storedReadBooksIds) {
        const readBook = books.find((rBook) => rBook.bookId === bookId);
        if (readBook) {
          readBooks.push(readBook);
        }
        console.log("ReadBook = ", readBooks);
        setReadBook(readBooks);
      }
    }
  }, [books]);

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
         C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
         Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="flex justify-center bg-slate-100 w-full min-h-[calc(100vh-352px)] rounded-xl">
        <BarChart
      width={1000}
      height={400}
      data={readBook}
      
      margin={{
        top: 90,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
      {readBook.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
      ))}
    </BarChart>
    </div>
  );
};

export default PageToRead;
