//import json server
const jsonServer = require('json-server')


//create a server using json server
const server = jsonServer.create()

//setup a middleware
const middleware = jsonServer.defaults()

//setup routes
const route = jsonServer.router('db.json')

//import cors
const cors = require('cors')

//implementing cors
server.use(cors())
server.use(middleware)
server.use(route)

//create port 
const PORT = process.env.PORT || 3000

//start server
server.listen(PORT,()=>{
    console.log("server running on port ",PORT);
    
})