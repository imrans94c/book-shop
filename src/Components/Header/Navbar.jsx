import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex my-10 items-center">
      <div className="navbar-start ">
        <a className="text-2xl font-bold">
          Book <span>Knowledge</span>
        </a>
      </div>
      <ul className="flex gap-5  navbar-center items-center">
        <li className="">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "border-2 border-[#23BE0A] text-[#23BE0A] p-2 rounded-lg"
                : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/listedBooks"
            className={({isPending, isActive}) => isPending ? "pending" : isActive ? "border-2 border-[#23BE0A] text-[#23BE0A] p-2 rounded-lg" : ""}

          >Listed Books</NavLink>
        </li>
        <li>
          <NavLink to="/pageToRead"
          className={({isPending, isActive}) => isPending ? "pending" : isActive ? "border-2 border-[#23BE0A] text-[#23BE0A] p-2 rounded-lg" : ""}
          >Page to Read</NavLink>
        </li>
      </ul>
      <div className="flex navbar-end gap-5">
        <Link className="btn bg-[#23BE0A]">Sign in</Link>
        <Link className="btn bg-[#59C6D2]">Sign up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
