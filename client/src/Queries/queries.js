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
