import { createContext, useContext, useEffect, useState } from "react";

const bookContext = createContext();

const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/new")
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
  const result = books.find((book) => book.isbn13 === id);
  return result;
};

export default BookProvider;
export { useBook, useDetail };
