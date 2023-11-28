const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

const user = {
    firstname : 'debanjana',
    lastname: 'sarkar',
    admin: true
}

const posts = [
    {title: 'Cooking', body: 'This is recipe for Caramel Cake'},
    {title: 'Traveling', body: 'Find 10 best places for this winter'},
    {title: 'Skin Care', body: 'Find 5 benefits of papaya on skin'}
]

app.get('/', (req, res) => {
    res.render('pages/index', {
        user
    })
})

app.get('/article', (req, res) => {
    res.render('pages/article', {
        posts,
        tabName: 'article'
    })
})


app.get('/about', (req, res) => {
    res.render('pages/About', {
        user
    })
})


app.listen(port, ()=> {
    console.log(`App is listening to ${port}`)
})

