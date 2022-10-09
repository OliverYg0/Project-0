const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    context = {
        title: 'Home'
    }
    res.render('index', context)
})

app.listen(port, () => {
    console.log('Server started on port', port)
})