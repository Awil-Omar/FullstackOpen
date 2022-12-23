const PersonForm = ({ addPerson, newPerson, handleNameChange, handleNumberChange }) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                name:{" "}
                <input name="name" value={newPerson.name} onChange={handleNameChange} />
            </div>
            <div>
                number:{" "}
                <input name="number" value={newPerson.number} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;