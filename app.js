const express = require('express');
const { dirname } = require('path');
const path = require("path")
const app = express()

app.listen(3030, ()=> console.log(path.join(__dirname, './views/index.html')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))

})
app.get('/productDetail.html', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/productDetail.html'))

})

app.get('/productCart.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'))


})

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))

})

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(--dirname, './views/login.html'))

})

app.use(express.static('public'))




