import { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { dataPlace } from "../Context";

function AddBook() {
  const { postData } = useContext(dataPlace);

  const formCheckYup = yup.object({
    bookName: yup.string().required("is required"),
    bookCover: yup.string().required("URL is required"),
    totalPages: yup
      .number()
      .min(1, "should be above 0")
      .required("is required"),
    author: yup.string().required("is required"),
  });

  const formik = useFormik({
    initialValues: {
      bookName: "",
      bookCover: "",
      totalPages: "",
      author: "",
    },
    validationSchema: formCheckYup,
    onSubmit: (values) => {
      const submittedValues = { ...values, borrowed: false };
      postData(submittedValues);
    },
  });

  return (
    <div className="pt-32  bg-slate-900 min-h-screen text-white ">
      <div className="container mx-auto flex justify-center">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-center text-sky-500 font-bold text-2xl mb-8">
            Add Book
            {/* <MdOutlineEditNote className="inline-block ml-2" size={"40px"} /> */}
          </h1>
          <label
            htmlFor="bookName"
            className={`pl-1 text-lg font-bold text-white ${
              formik.errors.bookName &&
              formik.touched.bookName &&
              "text-red-400"
            }`}
          >
            Book Name{" "}
            {formik.errors.bookName && formik.touched.bookName && (
              <span className="text-sm font-medium">
                {formik.errors.bookName}
              </span>
            )}
          </label>
          <input
            type="text"
            id="bookName"
            className=" my-3 w-72 p-2 md:w-96 mx-auto block  rounded-lg h-12 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2
           focus:ring-sky-500"
            name="bookName"
            value={formik.values.bookName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor="bookCover"
            className={`pl-1 text-lg font-bold text-white ${
              formik.errors.bookCover &&
              formik.touched.bookCover &&
              "text-red-400"
            }`}
          >
            Book Cover URL{" "}
            {formik.errors.bookCover && formik.touched.bookCover && (
              <span className="text-sm font-medium">
                {formik.errors.bookCover}
              </span>
            )}
          </label>

          <input
            type="text"
            id="bookCover"
            className=" my-3 w-72 p-2 md:w-96 mx-auto block  rounded-lg h-12 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2
           focus:ring-sky-500"
            name="bookCover"
            value={formik.values.bookCover}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor="totalPages"
            className={`pl-1 text-lg font-bold text-white ${
              formik.errors.totalPages &&
              formik.touched.totalPages &&
              "text-red-400"
            }`}
          >
            Total No.Pages{" "}
            {formik.errors.totalPages && formik.touched.totalPages && (
              <span className="text-sm font-medium">
                {formik.errors.totalPages}
              </span>
            )}
          </label>
          <input
            type="number"
            id="totalPages"
            className=" my-3 w-72 p-2 md:w-96 mx-auto block  rounded-lg h-12 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2
           focus:ring-sky-500"
            name="totalPages"
            value={formik.values.totalPages}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor="author"
            className={`pl-1 text-lg font-bold text-white ${
              formik.errors.author && formik.touched.author && "text-red-400"
            }`}
          >
            Author{" "}
            {formik.errors.author && formik.touched.author && (
              <span className="text-sm font-medium">
                {formik.errors.author}
              </span>
            )}
          </label>
          <input
            type="text"
            id="author"
            className=" my-3 w-72 p-2 md:w-96 mx-auto block  rounded-lg h-12 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2
           focus:ring-sky-500"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button
            className="my-3 w-72 p-2 md:w-96 bg-sky-500 h-12 rounded-lg hover:scale-105 transition-all text-slate-900 font-bold text-lg"
            type="submit"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
