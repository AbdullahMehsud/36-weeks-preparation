import express from 'express'
const app = express()

app.set("view engine", "ejs")

app.use( function(req, res, next) {
    console.log("middleware");
    next()
})
app.get('/', (req, res) => {
  res.render("index", {name: 'abdullah'})
})
app.get('/about', (req, res) => {
  res.render("about")
})


app.listen(3000)