import Author from "../Models/Author.js";

export const getAllAuthor = async (req, res) => {
    try {
        
        const authors = await Author.find()

        res.json(authors)

    } catch(err) {
        res.json({
            message: `При получении списка авторов возникла ошибка - ${err}`
        })
    }
}

export const getAuthor = async (req, res) => {
    try {
        
        const author = await Author.findOne({_id: req.params.id})

        res.json(author)

    } catch(err) {
        res.json({
            message: `При получении автора возникла ошибка - ${err}`
        })
    }
}

export const createNewAuthor = async (req, res) => {
    try {
        
        const authorName = await Author.findOne({name: req.body.name})

        if(authorName) {
            return res.json({
                message: "Данный автор уже существует"
            })
        }

        const doc = new Author({
            name: req.body.name,
        })

        await doc.save()
        res.json({message: "Автор успешно добавлен"})

    } catch(err) {
        res.json({
            message: `При получении автора возникла ошибка - ${err}`
        })
    }
}

export const updateAuthor = async (req, res) => {
    try {

        await Author.updateOne({
            _id: req.params.id
        },{
            name: req.body.name,
        })

        res.json({message: "Данные автора успешно обновлён!"})

    } catch(err) {
        res.json({
            message: `Ошибка при обновлении данных автора - ${err}` 
        })
    }
}

export const deleteAuthor = async (req, res) => {
    try {

        await Author.findOneAndDelete({
            _id: req.params.id
        })

        res.json({message: "Автор успешно удалён!"})

    } catch(err) {
        res.json({
            message: `Ошибка при удалении автора - ${err}` 
        })
    }
} 