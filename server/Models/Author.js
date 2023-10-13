import { Schema, model } from "mongoose";

const AuthorShema = new Schema (
    {
        name: String,
        books: [{
            type: Schema.Types.ObjectId,
            ref: "Book"
        }]
    }
)

export default model("Author", AuthorShema)