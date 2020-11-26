const graphql = require("graphql")
const _ = require("lodash")

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
} = graphql

const Book = require("../models/book")
const Author = require("../models/author")

// some dummy data! :
let books = [
	{ name: "Name of the Wind", genre: "Fantasy", id: "1", authorId: "1" },
	{ name: "The Final Empire", genre: "Fantasy", id: "2", authorId: "3" },
	{ name: "The Long Earth", genre: "Sci-Fi", id: "3", authorId: "2" },
	{ name: "Name of the ca", genre: "Fantasy", id: "1", authorId: "1" },
	{ name: "The Final XCXC", genre: "Fantasy", id: "2", authorId: "3" },
	{ name: "The Long zzz", genre: "Sci-Fi", id: "3", authorId: "2" },
]

let authors = [
	{ name: "Patrick Rothfuss", age: 44, id: "1" },
	{ name: "Brandon Sanderson", age: 42, id: "2" },
	{ name: "Terry Pratchett", age: 66, id: "3" },
]

const BookType = new GraphQLObjectType({
	name: "Book",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve(parent, args) {
				return authors.find((author) => author.id == parent.authorId)
			},
		},
	}),
})

const AuthorType = new GraphQLObjectType({
	name: "Author",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				return books.filter((book) => book.authorId == parent.id)
			},
		},
	}),
})

// @ Rootquery
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// code to get data from db / other source
				// return books.find((b) => b.id == args.id)
			},
		},
		author: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// return authors.find((author) => author.id == args.id)
			},
		},
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				// return books
			},
		},
		authors: {
			type: new GraphQLList(AuthorType),
			resolve(parent, args) {
				// return authors
			},
		},
	},
})

// mutations let us mutate our data (think crud), we need to explicitly define in GraphQL what we want to mutate.

const Mutations = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		addAuthor: {
			type: AuthorType,
			args: {
				name: { type: GraphQLString },
				age: { type: GraphQLInt },
			},
			resolve(parent, args) {
				let author = new Author({
					name: args.name,
					age: args.age,
				})

				return author.save()
			},
		},
		addBook: {
			type: BookType,
			args: {
				name: { type: GraphQLString },
				genre: { type: GraphQLString },
				authorId: { type: GraphQLID },
			},
			resolve(parent, args) {
				let book = new Book({
					name: args.name,
					genre: args.genre,
					authorId: args.authorId,
				})
				return book.save()
			},
		},
	},
})

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutations,
})
