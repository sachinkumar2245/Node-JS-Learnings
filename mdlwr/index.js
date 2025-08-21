import express from "express"

const app = express()
const PORT = 3000;

app.get('/', (req, res, next) =>{
    res.send('Hello world this is sachin')
})

app.get('/about', (req, res, next) =>{
    res.send('This is about page')
})

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`)
})