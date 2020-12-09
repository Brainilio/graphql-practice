import React from "react"
import classes from "./AddBook.module.css"
import { gql, useQuery } from "@apollo/client"

const GET_AUTHORS = gql`
	{
		authors {
			name
			id
		}
	}
`

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
					</select>
				</div>
				<button>Add Book</button>
			</form>
		</div>
	)
}

export default AddBook
