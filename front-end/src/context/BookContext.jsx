import { createContext, useContext, useEffect, useState } from "react";
import { BookBaseUrl } from "configs/api";

const bookContext = createContext();

const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  // https://api.itbook.store/1.0/search/new
  useEffect(() => {
    fetch(BookBaseUrl("books"))
      .then((res) => res.json())
      .then((data) => setBookData(data.books))
      .catch((err) => console.log(err));
  }, []);

  return (
    <bookContext.Provider value={bookData}>{children}</bookContext.Provider>
  );
};

const useBook = () => {
  const books = useContext(bookContext);
  return books;
};

const useDetail = (id) => {
  const books = useContext(bookContext);
  const result = books.find((book) => book._id === id);
  return result;
};

export default BookProvider;
export { useBook, useDetail };
