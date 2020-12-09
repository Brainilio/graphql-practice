import React, { useState } from "react"
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
	const [data, setData] = useState({
		name: "",
		genre: "",
		authorId: "",
	})

	const formHandler = (event) => {
		let label = event.target.name
		let value = event.target.value
		setData({
			...data,
			[label]: value,
		})
	}

	const submitForm = (event) => {
		event.preventDefault()
		console.log(data)
	}

	return (
		<div>
			<form className={classes.Form} onSubmit={(e) => submitForm(e)}>
				<div className={classes.Field}>
					<label>Book Name:</label>
					<input type="text" name="name" onChange={(e) => formHandler(e)} />
				</div>
				<div className={classes.Field}>
					<label>Genre:</label>
					<input type="text" name="genre" onChange={(e) => formHandler(e)} />
				</div>
				<div className={classes.Field}>
					<label>Author:</label>
					<select name="authorId" onChange={(e) => formHandler(e)}>
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
