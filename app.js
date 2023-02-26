const express = require('express');
const port = process.env.PORT || 5500;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));


app.get('/form', (req, res)=>{
    req.sendFile(__dirname + '/public/register.html');
})

app.post('/formPost', (req, res)=>{
    console.log(req.body);
})

app.listen(port, () =>{
    console.log(`Server started at http://localhost:${port}`)
});