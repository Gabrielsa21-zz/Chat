var express = require('express')
var app = express()
var fs = require ('fs')
var io = require('socket.io')(server)

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.use(express.static(__dirname+ '/public'))

app.get('/', function(req, res){
    // res.render('interacao')
    res.sendFile(__dirname + './views/interacao.ejs')
})

io.on('connection', (socket) => {
    socket.on('msgs', (msg) => {
        socket.broadcast.emit('msgs', msg)
    })
})


var server = app.listen(3000)







