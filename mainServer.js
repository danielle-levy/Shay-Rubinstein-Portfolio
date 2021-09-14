import express from 'express'
import path from 'path'
const app = express()

let __dirname = path.resolve(path.dirname(''));

app.get('*.css', express.static('.'))
app.get('*.jpg', express.static('.'))
app.get('*.js', express.static('.'))

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/LandingPage.html")
})

app.listen(3000, () => {
    console.log(`Server started listening on port: 3000`);
});