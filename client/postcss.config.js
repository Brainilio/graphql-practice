const tailwindcss = require("tailwindcss")
module.exports = {
	plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
}

// here is where the prefixer package is used;
