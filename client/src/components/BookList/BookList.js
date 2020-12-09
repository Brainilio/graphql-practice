import React, { useState } from "react"
import classes from "./BookList.module.css"
import { useQuery, useMutation } from "@apollo/client"
import { GET_BOOKS, DELETE_BOOK } from "../../Queries/queries"
import BookDetails from "../BookDetails/BookDetails"

const DisplayBooks = (props) => {
	const { loading, error, data } = useQuery(GET_BOOKS)
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error! : {error.message} </p>
	return data.books.map((book) => (
		<>
			<li onClick={() => props.clicked(book.id)} key={book.id}>
				{book.name}
			</li>
			<button onClick={() => props.delete(book.id)}>Delete</button>
		</>
	))
}

const BookList = () => {
	const [book, setBook] = useState(null)
	const [deleteBook] = useMutation(DELETE_BOOK)

	let selectedBook = null

	if (book) {
		selectedBook = <BookDetails id={book} />
	}

	const clickHandler = (id) => {
		console.log(id)
		setBook(id)
	}

	const deleteHandler = (id) => {
		console.log(id)
		deleteBook({
			variables: {
				id: id,
			},
			refetchQueries: [
				{
					query: GET_BOOKS,
				},
			],
		})
	}

	return (
		<div>
			<ul className={classes.List}>
				<DisplayBooks clicked={clickHandler} delete={deleteHandler} />
			</ul>
			{selectedBook}
		</div>
	)
}

export default BookList
