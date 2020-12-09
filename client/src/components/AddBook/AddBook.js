import React from "react"
import classes from "./AddBook.module.css"
import { useQuery } from "@apollo/client"
import { GET_AUTHORS } from "../../Queries/queries"

const DisplayAuthors = () => {
	const { loading, error, data } = useQuery(GET_AUTHORS)
	if (loading) return <option disabled>Loading authors..</option>
	if (error) return <option disabled>Something went wrong..</option>
	return data.authors.map((author) => (
		<option value={author.id} key={author.id}>
			{author.name}
		</option>
	))
}

const AddBook = () => {
	return (
		<div>
			<form className={classes.Form}>
				<div className={classes.Field}>
					<label>Book Name:</label>
					<input type="text" />
				</div>
				<div className={classes.Field}>
					<label>Genre:</label>
					<input type="text" />
				</div>
				<div className={classes.Field}>
					<label>Author:</label>
					<select>
						<option>Select Author</option>
						{DisplayAuthors()}
					</select>
				</div>
				<button>Add Book</button>
			</form>
		</div>
	)
}

export default AddBook
