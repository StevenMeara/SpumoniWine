const express = require('express')
const app = epxress()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(3000)