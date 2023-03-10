const fs = require("fs")

fs.readdir("/path/to/folder", (err, files) => {
	if (err) {
		console.error(err)
		return
	}

	console.log(files)
})
