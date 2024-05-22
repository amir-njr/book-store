// Context
import { useBook } from "context/BookContext";
// Module
import BookCard from "components/module/BookCard";
// Loader
import { Triangle } from "react-loader-spinner";
// Component
import Hero from "components/template/Hero";
import SubHero from "components/template/SubHero";

const Home = () => {
  const bookData = useBook();
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <SubHero />

      <div
        className={`${
          bookData.length ? "grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8" : "flex justify-center"
        }`}
      >
        {bookData.length ? (
          bookData.map((book) => <BookCard book={book} key={book.isbn13} />)
        ) : (
          <Triangle
            visible={true}
            height="200"
            width="200"
            color="blue"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </div>
    </div>
  );
};

export default Home;
