let app = require('express')();
let http = require('http').Server(app);

let io = require('socket.io')(http)

//
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
http.listen(3000, () => {
    console.log('Connection done')
})


io.on('connection', (socket) => {
    console.log("there is a connection")
    socket.on('disconnect', () => {
        console.log("Disconnected")
    })
    
    socket('Created', (data) => {
        io.emit('Created', (data))
    })
})