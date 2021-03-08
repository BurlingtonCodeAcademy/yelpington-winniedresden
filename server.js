const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 5000
const staticDir=process.env.DEV ? './client/public' : "./client/build"
//middleware to bind to static directory - this will allow you to go to a 404
app.use(express.static('./public'))
//middleware to read form content 
app.use(express.urlencoded({extended: true}))
//app.use(express.static('./public')) // public doesn't exist yet

//serve json to api endpoint
app.get("/api", (req, res) => {
    res.sendFile(path.resolve('./api/directory.json'))
});
app.get('/api/:id', (req, res) => { 
    res.sendFile(path.resolve(`api/${req.params.id}.json`))
})

app.get("*", (req,res) => {
    res.status(404).sendFile(path.resolve('./client/public/404.html'));
})



app.listen(port, () => console.log(`listening on port ${port}`))

