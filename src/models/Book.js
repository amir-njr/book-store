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

  category: {
    type: String,
    enum: ["handout", "academic", "story", "novel"],
    required: true,
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Book = models.Book || model("Book", bookSchema);

export default Book;
