import {useState, useEffect} from "react"
import { IAuthor } from "../interface/IAuthor"
import { IBook } from "../interface/IBook"

const Home = () => {
    const [authors, setAuthors] = useState([])

    const getAuthors = async () => {
        const responce = await fetch("http://localhost:5999/authors")
        const data = await responce.json()
        setAuthors(data)
    }

    useEffect(() => {
        getAuthors()
    }, [])

  return (
    <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900">Авторы</h2>
        {authors.map((author: IAuthor) => {
            return (
                <ol className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">{author.name}
                    {author.books.map((book: IBook) => {
                        return <li>{book.title}</li>
                    })}
                </ol>
            )
        })}
    </div>
  )
}

export default Home