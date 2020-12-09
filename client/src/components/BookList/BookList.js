import React from "react"
import classes from "./BookList.module.css"
import { useQuery } from "@apollo/client"
import { GET_BOOKS } from "../../Queries/queries"

const DisplayBooks = () => {
	const { loading, error, data } = useQuery(GET_BOOKS)
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error! : {error.message} </p>
	return data.books.map((book) => <li key={book.id}>{book.name}</li>)
}

const BookList = () => {
	return (
		<div>
			<ul className={classes.List}>{DisplayBooks()}</ul>
		</div>
	)
}

export default BookList