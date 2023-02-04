import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dataPlace } from "../Context";

function LibraryanSingleBook({ bookData }) {
  const navigate = useNavigate();
  const { deleteBook } = useContext(dataPlace);

  return (
    <div className="flex items-center border-2 border-sky-500 rounded-lg">
      <div className="rounded-lg">
        <img
          src={bookData.bookCover}
          alt="Book Cover"
          className="w-40 h-60  rounded-l-md object-cover"
        />
      </div>
      <div className="p-2 ml-5">
        <h2 className="text-white font-bold text-2xl md:text-3xl mb-4">
          {bookData.bookName}
        </h2>
        <p className="text-slate-300 ">Author : {bookData.author}</p>
        <p className="text-slate-300 "> No.Pages : {bookData.totalPages}</p>

        <div className="mt-2 md:mt-5 flex gap-3">
          <button
            className="text-sm bg-sky-800 px-3 font-bold text-sky-200 rounded-full hover:bg-sky-700 transition-all"
            onClick={() => navigate(`/libraryan/edit-book/${bookData.id}`)}
          >
            EDIT
          </button>
          <button
            className="text-sm bg-red-800 px-3 font-bold text-red-200 rounded-full hover:bg-red-700 transition-all"
            onClick={() => deleteBook(bookData.id)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default LibraryanSingleBook;
