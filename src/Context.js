import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const dataPlace = createContext();

export function DataProvider({ children }) {
  const API = "https://63da349f19fffcd620c32baa.mockapi.io";
  const [booksData, setBooksData] = useState([]);
  const navigate = useNavigate();

  //   const [search, setSearch] = useState("");

  //get all the books data _______________________________________________________
  const getData = async () => {
    const res = await fetch(`${API}/books`, { method: "GET" });
    const data = await res.json();
    setBooksData(data);
  };

  //__________________________________________________________________________________

  // Delete a book ____________________________________________________________________
  const deleteBook = async (id) => {
    await fetch(`${API}/books/${id}`, { method: "DELETE" });
    await getData();
  };
  //____________________________________________________________________________________

  // EDIT A SINGLE BOOK _________________________________________________________________
  const [singleBookData, setSingleBookData] = useState(null);

  const getSingleData = async (id) => {
    const res = await fetch(`${API}/books/${id}`, { method: "GET" });
    const data = await res.json();
    setSingleBookData(data);
  };

  const putData = async (values, id) => {
    await fetch(`${API}/books/${id}`, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: { "content-type": "application/json" },
    });
    navigate("/libraryan");
  };

  //______________________________________________________________________________________

  // ADD A BOOK_____________________________________________________________________________

  const postData = async (value) => {
    await fetch(`${API}/books`, {
      method: "POST",
      body: JSON.stringify(value),
      headers: { "content-type": "application/json" },
    });
    navigate("/libraryan");
  };

  // _______________________________________________________________________________________

  // BORROW A BOOK _________________________________________________________________________

  const borrowBook = async (values, id) => {
    const updatedValue = { ...values, borrowed: true };

    await fetch(`${API}/books/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedValue),
      headers: { "content-type": "application/json" },
    });
    await getData();
  };

  // _______________________________________________________________________________________

  // RETURN A BOOK _________________________________________________________________________
  const returnBook = async (values, id) => {
    const updatedValue = { ...values, borrowed: false };

    await fetch(`${API}/books/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedValue),
      headers: { "content-type": "application/json" },
    });
    await getData();
  };

  // _______________________________________________________________________________________

  return (
    <dataPlace.Provider
      value={{
        booksData: booksData,
        getData: getData,
        singleBookData: singleBookData,
        setSingleBookData: setSingleBookData,
        getSingleData: getSingleData,
        putData: putData,
        deleteBook: deleteBook,
        postData: postData,
        borrowBook: borrowBook,
        returnBook: returnBook,
      }}
    >
      {children}
    </dataPlace.Provider>
  );
}
