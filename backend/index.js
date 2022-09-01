const connectToMongoose=require('./db')

connectToMongoose();
var cors = require('cors')//to make connection between
const express = require('express')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
//all the routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('Hello ohk World!')
})

app.listen(port, () => {
  console.log(`iNoteBook app listening on port ${port}`)
})
