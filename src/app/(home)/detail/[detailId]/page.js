import Detail from "@/components/template/Detail/Detail";
import Book from "@/models/Book";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

async function detail({ params: { detailId } }) {
  await connectDB();
  const detailBook = await Book.findOne({ _id: detailId });
  return (
    <div>
      <Detail detailBook={detailBook} />
    </div>
  );
}

export default detail;
