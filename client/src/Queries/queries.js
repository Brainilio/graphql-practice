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
	mutation {
		addBook(name: "", genre: "", authorId: "") {
			name
			id
		}
	}
`
