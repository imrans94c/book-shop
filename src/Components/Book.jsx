import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {bookId, image, tags, bookName, author, category, rating} = book || {};
  return (
    
    <div className="card bg-base-100 w-96 border-2 border-gray-200">
      <Link to={`/bookDetails/${bookId}`}>
      <figure className="bg-slate-100 w-80 h-64 rounded-lg my-7 mx-7">
        <img
            className="w-48 h-56"
          src={image}
          alt="Book"
        />
      </figure>
      <div className="card-actions justify-start mx-7 font-semibold">
        {
            tags?.map((tag, idx) => <div key={idx} className="badge  text-[#23BE0A]">{tag}</div> )
        }
        
      </div>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By : {author}</p>
        <hr />

        <div className="flex justify-between items-center my-5">
          <h2>{category} </h2>
          <h2 className="flex justify-evenly items-center">{rating} <span className="ml-5"><FaRegStar /></span></h2>
        </div>
      </div>
      </Link>
    </div>
    
  );
};

export default Book;
