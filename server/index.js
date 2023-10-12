import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

mongoose.connect("mongodb://0.0.0.0:27017/MyLibrary_Lite")
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

app.listen(5999, () => {
    console.log("Server start!")
})