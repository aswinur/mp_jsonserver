//importing json server package
const JSONserver=require('json-server')

//creating server using create() methode from json server
const MPserver=JSONserver.create()

//generating path/route to server resource
const router=JSONserver.router('db.json')

//initiating json-server middlewares
const middleware=JSONserver.defaults()

//creating port number for server
const PORT=3000 | process.env.PORT

//implementing middlewaer to server
MPserver.use(middleware)

//implementing route to resource to server
MPserver.use(router)

//run command for server
MPserver.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
}) 


