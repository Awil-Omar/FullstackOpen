import {useEffect, useState} from 'react'
import Persons from "./Components/Persons";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import axios from "axios";


const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [personFilter, setPersonFilter] = useState('')
    const [personsToShow, setPersonsToShow] = useState([]);

    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }

    useEffect(hook, [])
    console.log(persons.length)

    let IsOnList = persons.some(e => e.name.includes(newName));

    const addName = (event) =>{

        if (IsOnList) {
            alert(`${newName} is already added to phonebook`)
        }
        else
            event.preventDefault()
            setNewName('')
            setNewNumber('')
            setPersons([...persons, {  name:newName, number: newNumber}])
        }

    const handleNameChange = (event)=>{
        console.log(event.target.value);
        setNewName(event.target.value)

    }
    const handleNumberChange = (event)=>{
        console.log(event.target.value);
        setNewNumber(event.target.value)

    }
    const filterByName = (event) => {
        const search = event.target.value;
        setPersonFilter(search);
        setPersonsToShow(persons.filter(person => person.name.toLowerCase().includes(search)));
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={personFilter} filterByName={filterByName} />
            <PersonForm
                addPerson={addName}
                newPerson={newName}
                handleNameChange={handleNameChange}
                handleNumberChange = {handleNumberChange}
            />
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow}  />
        </div>
    );
}

export default App