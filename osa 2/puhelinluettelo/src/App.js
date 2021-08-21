import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '0406534340'},
    {name: 'Tommi Penttilä', number: '0506793020'},
    {name: 'Jorma Uotinen', number: '04569390394'},
    {name: 'Matti Nykäen', number: '0100100123'}
  ]) 

  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber,
    }

    const personAr = persons.map(x => x.name)

    if(personAr.includes(newName) === true) {
      alert(`${newName} is allready used !`)
    } else {
    setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')
  }
  }

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const numbersToShow = filter
    ? persons.filter((person) => person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h3>Search for a person</h3>
        <input value={filter} onChange={handleFilterChange}/>
        <div>
          <p></p>
        </div>
      </div>
      <h2>Add new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>          
        </div>
        <br />
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{numbersToShow.map((person) => <li>{person.name} {person.number}</li>)}</ul>
    </div>
  )
}

export default App
