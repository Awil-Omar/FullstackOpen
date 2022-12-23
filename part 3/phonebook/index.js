require('dotenv').config()
const express = require('express')
const {request, response} = require("express");
const app = express()
const Person = require('./models/person')




personsSchema.find({name:"cawil"}).then(result => {
    result.forEach(person =>{
        console.log(person)
    })
    mongoose.connection.close()
})
    .catch((err) => console.log(err))


const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

app.use(express.json())

app.use(requestLogger)

app.get('/api/persons', (req, res) => {
    res.json(persons)

})
//get method
app.get('/info', (request, response) => {
    const timezoneOffset =new Date().toString()
    console.log(timezoneOffset);
    response.send(`<div>
          <p>Phonebook has info for ${persons.length} people</p>
        </div>
        <div>
          <p>${timezoneOffset}</p>
        </div>`
    )
})

//post method
app.post('/api/persons', (request,response) => {
    const body = request.body


   const generateId = Math.floor(Math.random()* 50)+10
    //console.log("what is the value of generatedid", generateId)
    // if the content is empty

    if (!body.name || !body.number){
        return response.status(400).json({
            error: 'name or number is missing'
        })
        }
    else if (persons.name === body.name){
        return response.status(400).json({
            error: 'name already in the phonebook'
        })
    }

    const content = {
        id: generateId,
        name: body.name,
        number: body.number

    }
    const allPersons = persons.concat(content)
    console.log("list of the people", body.id)

    response.json(allPersons)


})

//delete method
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    let filteredPersons = persons.filter(data => data.id !== id)
    console.log(filteredPersons)

    response.status(204).end()
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const foundId = persons.find(data => data.id === id)

    if (foundId) {
        response.json(foundId)
    } else {
        response.status(404).end()
    }
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const nameMissing = (req, res) =>{
    res.status(404).send({
        error: "name must be unique"
    })
}
app.use(nameMissing)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
