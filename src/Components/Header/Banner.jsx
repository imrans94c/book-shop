import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="flex justify-evenly items-center bg-slate-100 min-h-[calc(100vh-96px)] rounded-lg">
           <div>
                <h2 className="text-5xl font-semibold my-5 leading-normal">Books to freshen up <br>
                </br> your bookshelf
                </h2>
                <button className="btn bg-[#23BE0A]"><Link to="/listedBooks">View The List</Link></button>
           </div>
           <div>
                <img className="w-40 h-60 bg-slate-100" src="banner.jpg" alt="" />
           </div>
        </div>
    );
};

export default Banner;