const graphql = require("graphql")
const _ = require("lodash")

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql

// some dummy data! :
const books = [
	{ name: "aslkdja", genre: "asdkl", id: 1 },
	{ name: "zcx", genre: "sad", id: 2 },
	{ name: "zxczxc", genre: "zxc", id: 3 },
]

const BookType = new GraphQLObjectType({
	name: "Book",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
	})
})

// @ Rootquery

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		book: {
			type: BookType,
			args: { id: { GraphQLID } },
			resolve(parent, args) {
				// code to get data from db / other source
				return books.filter((book) => book.id === args.id)
				// _.find(books, {id: args.id})
			},
		},
	},
})

module.exports = new GraphQLSchema({
	query: RootQuery,
})
