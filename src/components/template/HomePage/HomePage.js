import BookCard from "@/components/module/BookCard";

const HomePage = ({ bookData }) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {bookData?.map((item) => (
        <BookCard key={item._id} data={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
};

export default HomePage;
