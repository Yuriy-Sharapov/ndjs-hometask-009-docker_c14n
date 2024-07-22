// подключаем Express
const express = require('express')

const errorMiddleware = require('./middleware/error');

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const booksRouter = require('./routes/books')
const uploaderRouter = require('./routes/uploader')

const app = express()
app.use(express.json())   
app.use(express.urlencoded())
app.set("views","src/views")
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/', userRouter)
app.use('/', booksRouter)
app.use('/', uploaderRouter)

app.use(errorMiddleware)

// Настраиваем порт, который будет прослушивать сервер
const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log(`Server is listening port ${PORT}.`)
})