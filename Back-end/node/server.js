const express = require('express');
const app = express();
const port = 3400;
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:3400',
}
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}));
// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)    
})

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/request', (req, res) => {
    let name = req.query.name;
    let id = req.query.id;
    let string = "Hello my name is " + name + ", and my id is " + id;
    console.log(string);
    res.send(string);
})

app.post('/post', (req, res) => {
    console.log("Req: ", req.body);
    let userName = req.body.userName;
    let passWord = req.body.passWord;
    let string = "Hello my username is " + userName + ", and my password is " + passWord;
    console.log(string);
    res.send(string);
})