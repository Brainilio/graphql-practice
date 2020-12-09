import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/client"
import BookList from "./components/BookList/BookList"
import AddBook from "./components/AddBook/AddBook"

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
})

console.log(process.env.URI)

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="main">
				<h1>My reading list:</h1>
				<BookList />
				<AddBook />
			</div>
		</ApolloProvider>
	)
}

export default App
