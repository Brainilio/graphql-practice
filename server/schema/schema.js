const graphql = require("graphql")

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

const BookType = new GraphQLObjectType({
	name: "Book",
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
	}),
})

// @ Rootquery

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		books: {
			type: BookType,
			args: { id: { GraphQLString } },
			resolve(parent, args) {
				// code to get data from db / other source
			},
		},
	},
})

module.exports = new GraphQLSchema({
	query: RootQuery,
})
