import { Schema, model, models } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  price: {
    type: Number,
    required: true,
  },

  category: String,
  image: {
    type: String,
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Book = models.Book || model("Book", bookSchema);

export default Book;
