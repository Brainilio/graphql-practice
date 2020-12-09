import React, { useState } from "react"
import classes from "./BookList.module.css"
import { useQuery } from "@apollo/client"
import { GET_BOOKS } from "../../Queries/queries"
import BookDetails from "../BookDetails/BookDetails"

const DisplayBooks = (props) => {
	const { loading, error, data } = useQuery(GET_BOOKS)
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error! : {error.message} </p>
	return data.books.map((book) => (
		<li onClick={() => props.clicked(book.id)} key={book.id}>
			{book.name}
		</li>
	))
}

const BookList = () => {
	const [book, setBook] = useState(null)

	let selectedBook = null

	if (book) {
		selectedBook = <BookDetails id={book} />
	}

	const clickHandler = (id) => {
		console.log(id)
		setBook(id)
	}

	return (
		<div>
			<ul className={classes.List}>
				<DisplayBooks clicked={clickHandler} />
			</ul>
			{selectedBook}
		</div>
	)
}

export default BookList
