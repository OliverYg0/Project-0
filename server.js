const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/test', (req, res) => {
    res.render('test', {text: 'Hello there, this is the test page.'})
})

app.listen(port, () => {
    console.log('Server started on port', port)
})