import express from 'express'

const app = express()

app.use('/', (req, res, next) => {
    res.send('<h1>Som3aaa</h1>')
})

app.listen(3000)