import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LibraryanPage from "./pages/LibraryanPage";
import AddBook from "./pages/AddBook";
import LibraryanNavBar from "./components/LibraryanNavBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/libraryan" element={<LibraryanNavBar />}>
        <Route index element={<LibraryanPage />} />
        <Route path="add-book" element={<AddBook />} />
        <Route path="borrowed-books" element={<h1>Comming soon..</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
