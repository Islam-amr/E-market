import express from 'express'

const app = express()

app.use('/', (req, res, next) => {
    res.send('<h1>Hello node js</h1>')
})

app.listen(3000)