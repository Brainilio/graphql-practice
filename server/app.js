const express = require("express")
const app = express()

const port = 4000

app.listen(port, () => {
	console.log(`Listening to requests on port ${port}`)
})
