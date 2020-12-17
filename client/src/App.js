import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/client"
import BookList from "./components/BookList/BookList"
import AddBook from "./components/AddBook/AddBook"

const client = new ApolloClient({
	uri: process.env.REACT_APP_API_URI,
})

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="container box-border">
				<h1 className="">My reading list: {process.env.REACT_APP_NAME}</h1>
				<BookList />
				<AddBook />
			</div>
		</ApolloProvider>
	)t
}

export default App
