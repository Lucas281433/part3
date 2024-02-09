const Filter = ({ personFilter, handlePersonFilter }) => {
  return (
    <div>
      Filter shown with{" "}
      <input value={personFilter} onChange={handlePersonFilter} />
    </div>
  );
};

export default Filter;
