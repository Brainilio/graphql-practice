import { gql } from "@apollo/client"

export const GET_BOOKS = gql`
	{
		books {
			name
			id
		}
	}
`

export const GET_AUTHORS = gql`
	{
		authors {
			name
			id
		}
	}
`

export const ADD_BOOK = gql`
	mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
		addBook(name: $name, genre: $genre, authorId: $authorId) {
			name
			id
		}
	}
`

export const GET_SINGLE_BOOK = gql`
	query($id: ID!) {
		book(id: $id) {
			id
			name
			genre
			author {
				name
				books {
					name
				}
			}
		}
	}
`
