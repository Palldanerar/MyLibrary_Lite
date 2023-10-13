import { Schema, model } from "mongoose";

const BookShema = new Schema({
    title: String
})

export default model("Book", BookShema)