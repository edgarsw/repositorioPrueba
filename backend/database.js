const mongooose = require('mongoose')
const URI = 'mongodb://localhost/crud'

mongooose.connect(URI)
.then(db => { console. log("DB is connected")})
.catch(err => {console.log(`Error connection: ${err}`)})

module.exports = mongooose