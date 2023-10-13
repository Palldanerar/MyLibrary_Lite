import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import {getAllAuthor, getAuthor, createNewAuthor, updateAuthor, deleteAuthor} from "./Controllers/AuthorController.js"
import { addBook } from "./Controllers/BookController.js"

const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/MyLibrary_Lite")
    .then(() => {
        console.log("БАЗА ДАННЫХ ПОДКЛЮЧЕНА")
    })
    .catch((err) => {
        console.log(`БАЗА ДАННЫХ НЕ ПОДКЛЮЧЕНА. Ошибка: ${err}`)
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("API для сервиса MyLibrary_Lite")
})

// Запросы
app.get("/authors", getAllAuthor)
app.get("/author/:id", getAuthor)
app.post("/author", createNewAuthor)
app.patch("/author/:id", updateAuthor)
app.delete("/author/:id", deleteAuthor)

app.post("/author/books/:id", addBook)

app.listen(5999, () => {
    console.log("Server start!")
})