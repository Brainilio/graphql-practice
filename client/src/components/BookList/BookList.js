import React from "react"
import classes from "./BookList.module.css"
import { gql, useQuery } from "@apollo/client"

const GET_BOOKS = gql`
	{
		books {
			name
			id
		}
	}
`

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
