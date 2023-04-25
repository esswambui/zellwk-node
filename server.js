console.log('May Node be with you')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

const connnectionString = 'mongodb+srv://test_user:mypassword@star-wars.akmqkpq.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connnectionString,
    { useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')

        app.use(bodyParser.urlencoded({extended:true}))

        app.get('/', (req, res) => {
            //res.send('Hello world')
            //console.log(__dirname)
            res.sendFile(__dirname + '/index.html')
          })

        app.post('/quotes', (req, res) => {
            console.log("Helllloooooo")
            console.log(req.body)
        
          })

          app.listen(3000, () => {
            console.log('listening on 3000')
          })

      })
      .catch(error => console.error(error))

// MongoClient.connect(
//     connnectionString,
//     {
//       useUnifiedTopology: true,
//     },
//     (err, client) => {
//       if (err) return console.error(err)
//       console.log('Connected to Database')
//     }
//   )


// Create a server


 

