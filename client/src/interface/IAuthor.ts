import { IBook } from "./IBook";

export interface IAuthor {
    id: String,
    name: String,
    books: IBook[]
}