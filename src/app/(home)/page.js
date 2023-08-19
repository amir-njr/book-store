// DB
import connectDB from "@/utils/connectDB";
// Model
import Book from "@/models/Book";


import Hero from "@/components/template/Hero/Hero";
import HomePage from "@/components/template/HomePage/HomePage";

async function Home() {
  await connectDB();
  const bookData = await Book.find()
  
  return (
    <main className="container mx-auto flex flex-col gap-10">
      <Hero />
      <HomePage bookData={bookData} />
    </main>
  );
}

export default Home;
