import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LibraryanPage from "./pages/LibraryanPage";
import AddBook from "./pages/AddBook";
import LibraryanNavBar from "./components/LibraryanNavBar";
import EditBook from "./pages/EditBook";
import { DataProvider } from "./Context";

import UserNavBar from "./components/UserNavBar";
import UserPage from "./components/UserPage";

import BorrowdeBooksLibraryan from "./pages/BorrowedBooksLibraryan";
import BorrowdeBooksUser from "./pages/BorrowedBooksUser";

function App() {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* libraryan Routes */}
          <Route path="/libraryan" element={<LibraryanNavBar />}>
            <Route index element={<LibraryanPage />} />
            <Route path="add-book" element={<AddBook />} />
            <Route path="edit-book/:id" element={<EditBook />} />
            <Route path="borrowed-books" element={<BorrowdeBooksLibraryan />} />
          </Route>
          {/* user Routes */}
          <Route path="/user" element={<UserNavBar />}>
            <Route index element={<UserPage />} />
            <Route path="borrowed-books" element={<BorrowdeBooksUser />} />
          </Route>
          {/* Borroewd books */}
          {/* <Route path="/library-books/borrowed" element={<BorrowdeBooks />} /> */}
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
