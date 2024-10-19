import { LuMapPin } from "react-icons/lu";
import { PiUsersThin } from "react-icons/pi";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ListBookCard = ({ rBook}) => {
  console.log("RRRR", rBook);
  const {
    bookId,
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
  } = rBook || {};
  
  return (
    <div className="flex items-center w-full h-72 bg-base-100 border-2 border-gray-100 mb-5 rounded-xl ">
      <div className="bg-slate-100 p-5 ml-5 rounded-xl">
        <img className="w-64 h-40 justify-start" src={image} alt="Movie" />
      </div>

      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>BY: {author}</p>
        <p className="flex">
          <span className="text-black mr-5">Tags:</span>
          {tags?.map((tag, idx) => (
            <span key={idx} className="badge  text-[#23BE0A]">
              #{tag}
            </span>
          ))}
          <span className="flex items-center ml-5">
            <span>
              <LuMapPin></LuMapPin>
            </span>
            Year of Publishing :{yearOfPublishing}
          </span>
        </p>
        <p className="flex text-gray-400 mr-5">
          <span className="text-2xl font-bold mr-2">
            <PiUsersThin />
          </span>
          Publisher : {publisher}
          <span className="flex items-center ml-5">
            <span className="text-xl font-bold mx-2">
              <RiPagesLine />
            </span>
            Page {totalPages}
          </span>
        </p>
        <hr className="border-gray-500" />
        <div className="flex gap-5 mt-5">
          <div className="w-40 h-10 rounded-3xl bg-blue-100 flex items-center justify-center">
            <h2 className="text-[#328EFF]">Category : {category}</h2>
          </div>
          <div className="w-40 h-10 rounded-3xl bg-amber-50 flex items-center justify-center">
            <h2 className="text-[#FFAC33]">Rating : {rating}</h2>
          </div>

          <button className=" w-40 h-10  rounded-3xl bg-[#23BE0A] flex items-center justify-center text-white">
           <Link to={`/bookDetails/${bookId}`}>View Details</Link> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListBookCard;
