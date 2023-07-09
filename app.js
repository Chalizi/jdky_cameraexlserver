const express = require('express')
var cors = require('cors')
const app = express()
const host = '192.168.1.6'
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send({
        serialNumber :'1',
        ipAddress: "192.168.1.2",
        position: "主井",
        password: "jdky2020",
        thoroughfare: "2",
        state: "在线",
        number: "11"
      })
})

app.listen(port, host, () => {
    console.log(host + ` Example app listening on port ${port}`)
})