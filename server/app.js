const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const graphql = require("graphql")
const schema = require("./schema/schema")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const port = 4000



dotenv.config({
	path: "./config.env",
})

app.listen(port, () => {
	console.log(`Listening to requests on port ${port}`)
})

//connect to mongodb
const DB = process.env.DB
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log(`Running mongoose...`)
	})
	.catch((err) => {
		console.log(err)
	})

//middleware for graphql
app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
)
