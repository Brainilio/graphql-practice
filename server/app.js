const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const graphql = require("graphql")
const schema = require("./schema/schema")
const app = express()

const port = 4000

app.listen(port, () => {
	console.log(`Listening to requests on port ${port}`)
})

//middleware for graphql
app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
)
