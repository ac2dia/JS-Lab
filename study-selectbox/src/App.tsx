import React from 'react';
import './styles/App.css';
import {ReactSelectBox} from "./components/ReactSelectBox";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'apple', label: 'Apple' },
    { value: 'melon', label: 'Melon' },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactSelectBox options={options} isMulti={false} isDisabled={false} isClearable={true} isSearchable={true} />
      </header>
    </div>
  );
}

export default App;
