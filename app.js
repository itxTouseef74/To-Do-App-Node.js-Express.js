const http=require('http')
port=3000
const createServer =http.createServer((req,res)=>{
  res.end("server is working fine")
});
createServer.listen(port,()=>{
    console.log(`server is listening at port http http://localhost:${port}`)
});
const n ='2'
