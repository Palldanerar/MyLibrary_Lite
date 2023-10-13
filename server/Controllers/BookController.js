import Book from "../Models/Book.js"
import Author from "../Models/Author.js"

export const addBook = async (req, res) => {
    try {

        const author = await Author.findOne({_id: req.params.id})

        if(!author) {
            return res.json({
                message: `Автор не найден!` 
            })
        }

        const doc = new Book({
            title: req.body.title
        })

        await Author.updateOne({
            _id: req.params.id
        },{
            $push: {books: doc._id}
        })

        await doc.save()
        res.json({message: "Книга успешно добавлена"})

    } catch(err) {
        res.json({
            message: `Ошибка при добавлении книги - ${err}` 
        })
    }
}