import React from "react"
import { useQuery, useMutation } from "@apollo/client"
import { GET_SINGLE_BOOK } from "../../Queries/queries"

const GetBook = (id) => {
	const { loading, error, data } = useQuery(GET_SINGLE_BOOK, {
		variables: {
			id: id,
		},
	})
	if (loading) return "Loading..."
	if (error) return `Error! : ${error.message}`
	console.log(data.book)
	if (data.book) {
		return (
			<div>
				<h2>{data.book.name}</h2>
				<p>{data.book.genre}</p>
				<p>{data.book.author.name}</p>
				<p>All books by this author:</p>
				<ul>
					{data.book.author.books.map((book) => (
						<li key={book.id}>{book.name}</li>
					))}
				</ul>
			</div>
		)
	} else return "No book selected..."
}

const BookDetails = (props) => {
	return (
		<div>
			<p>Output Book Details here</p>
			{GetBook(props.id)}
		</div>
	)
}

export default BookDetails
