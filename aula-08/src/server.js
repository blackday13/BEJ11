const app = require("./app")
const port = 5000

const { mongoose, databaseUrl } = require("./mongo")

mongoose.connect(databaseUrl).then(() => {
    app.listen(port, () => {
        console.log(`Server running on localhost:${port}`)
    })
})