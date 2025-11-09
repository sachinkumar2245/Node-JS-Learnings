import express from "express"


const app = express();

//http methods
app.get('/', (req, res) =>{
    res.send("This is the home page of the app")
})


export default app;