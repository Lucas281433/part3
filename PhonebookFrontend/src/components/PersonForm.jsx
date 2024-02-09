const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        <p>
          Name: <input value={newName} onChange={handleNameChange} />
        </p>
        <p>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </p>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;
