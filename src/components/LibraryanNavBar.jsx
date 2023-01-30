import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom/dist";
import { useEffect } from "react";

function LibraryanNavBar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("rendered");
  }, []);

  return (
    <>
      <div className="bg-slate-900 h-20 border-b-2 border-slate-600 flex items-center fixed w-screen">
        <div className="container mx-auto flex items-center justify-between px-5 md:px-4 relative">
          <h2 className="text-white text-3xl font-bold">Librayan</h2>
          <ul className="hidden md:flex text-white gap-7 font-bold text-lg cursor-pointer">
            <li className="hover:scale-105 transition-all text-gray-300">
              <Link to="/libraryan/add-book">Add Book</Link>
            </li>
            <li className="hover:scale-105 transition-all text-gray-300">
              <Link to="/libraryan/borrowed-books"> Borrowed Books</Link>
            </li>
          </ul>
          <div onClick={() => setOpen(!open)} className="md:hidden">
            {open ? (
              <>
                <FaTimes color={"#ffffff"} size="25px" />
                <div className="absolute bg-white  top-10 right-5 z-10  text-center rounded-lg shadow-lg  ">
                  <h3 className="text-slate-900 font-bold py-5 px-5 ">
                    <Link to="/libraryan/add-book">Add Book</Link>
                  </h3>
                  <h3 className=" text-slate-900 font-bold py-5 px-5 border-t-2">
                    <Link to="/libraryan/borrowed-books"> Borrowed Books</Link>
                  </h3>
                </div>
              </>
            ) : (
              <FaBars color={"#ffffff"} size="25px" />
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default LibraryanNavBar;
