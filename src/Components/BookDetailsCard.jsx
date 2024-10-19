import { ToastContainer, toast } from "react-toastify";
import { saveListId } from "../Utility/LocalStorage";
import 'react-toastify/dist/ReactToastify.css';


const BookDetailsCard = ({ book }) => {
  const {
    bookId,
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing
  } = book || {};

   
  console.log("wi",bookId);

  const handleWishList = () => {
    saveListId(bookId, 'wish-list');
  }

  const handleReadList = () => {
    saveListId(bookId, 'read-list');
  }
  return (
    <div className="flex w-full min-h-[calc(100vh-150px)] bg-base-100">
      <div className="w-1/2 h-auto flex justify-center items-center">
        <div className="w-3/4 h-5/6 bg-slate-100 flex justify-center items-center  rounded-lg ">
          <img className="w-2/3 h-3/4" src={image} alt="Album" />
        </div>
      </div>
      <div className="w-1/2 h-auto mt-14">
        <h2 className="text-5xl font-bold">{bookName}</h2>
        <h2 className="my-5 text-2xl text-gray-600">By : {author}</h2>
        <hr className="border-gray-500" />
        <h2 className="my-5">{category}</h2>
        <hr className="border-gray-500" />
        <h2 className=" text-black my-5">
          <span className="text-base  text-black font-bold">Review : </span>{" "}
          {review}{" "}
        </h2>
        <div className="card-actions justify-start my-5">
          <h2 className="font-bold">
            Tag
            {tags?.map((tag, idx) => (
              <div
                key={idx}
                className="badge  text-[#23BE0A] ml-5 font-semibold"
              >
                #{tag}
              </div>
            ))}
          </h2>
        </div>
        <hr className="border-gray-500" />
        <div className="flex">
          <div>   
              <h2 className="text-base my-5">Number of Pages :</h2>
              <h2 className="text-base my-5">Publisher :</h2>
              <h2 className="text-base my-5">Year of Publishing :</h2>
              <h2 className="text-base my-5">Rating :</h2>  
          </div>
          <div className="ml-20">
            <h2 className="text-base my-5"><span className="font-bold"> {totalPages} </span> </h2>
            <h2 className="text-base my-5"> <span className="font-bold"> {publisher} </span></h2>
            <h2 className="text-base my-5"><span className="font-bold"> {yearOfPublishing} </span></h2>
            <h2 className="text-base my-5"><span className="font-bold"> {rating} </span></h2>
          </div>
        </div>

       <p>
         <button onClick={handleReadList} className="btn bg-[#ffffff] border-1 border-gray-400 px-5 hover:bg-[#23BE0A] mr-2 ">Read</button>
        <button onClick={handleWishList} className="btn bg-[#59C6D2] hover:bg-[#23BE0A]">Wishlist</button>
        </p>
       
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetailsCard;
