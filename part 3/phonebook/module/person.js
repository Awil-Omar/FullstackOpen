const mongoose  = require('mongoose')
mongoose.set('strictQuery', true)
const url = process.env.MONGODB_URI
console.log("connected to",url)
//connect the url
mongoose.connect(url)
    .then(answer => { console.log("connceted to mongo db")})
    .catch((error)=>{console.log("error connecting to mongodb",error.message)})
//create a schema
const personsSchema = new mongoose.Schema({
    name: String,
    number: String
})
//delete the id and -v from the mongodb json
personsSchema.set('toJSON',{
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personsSchema)