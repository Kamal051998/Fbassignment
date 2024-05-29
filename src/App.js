import React, { useState } from 'react';

function App() {
  const [checkedItems, setCheckedItems] = useState({});

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="App">
      <h1>Checklist</h1>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            name={option}
            checked={checkedItems[option] || false}
            onChange={handleCheckChange}
          />
          <label>{option}</label>
        </div>
      ))}
      <div>
        <h2>Selected Options:</h2>
        <ul>
          {Object.keys(checkedItems)
            .filter((key) => checkedItems[key])
            .map((key) => (
              <li key={key}>{key}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
