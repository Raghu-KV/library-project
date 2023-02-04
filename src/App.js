import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LibraryanPage from "./pages/LibraryanPage";
import AddBook from "./pages/AddBook";
import LibraryanNavBar from "./components/LibraryanNavBar";
import EditBook from "./pages/EditBook";
import { DataProvider } from "./Context";

function App() {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/libraryan" element={<LibraryanNavBar />}>
            <Route index element={<LibraryanPage />} />
            <Route path="add-book" element={<AddBook />} />
            <Route path="edit-book/:id" element={<EditBook />} />
            <Route path="borrowed-books" element={<h1>Comming soon..</h1>} />
          </Route>
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
