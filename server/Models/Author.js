import { Schema, model } from "mongoose";

const AuthorShema = new Schema (
    {
        name: String,
        books: Array,
    }
)

export default model("Author", AuthorShema)