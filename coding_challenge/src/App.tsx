import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputText from './Components/InputText';
import RadioButton from './Components/RadioButton';
import DatePickerComponent from './Components/DatePicker';
import TextField from './Components/TextField';
import Checkbox from './Components/Checkbox';

function App() {
  const radioButtonValue = [
    {
      id: "1",
      name: "yes",
      value: "yes",
      label: "Yes"
    },
    {
      id: "2",
      name: "no",
      value: "no",
      label: "no"
    },
  ]
  return (
    <div className="App">
      <div className="container">
        <RadioButton payload={radioButtonValue} />
        <DatePickerComponent />
        <TextField />
        <Checkbox />
      </div>
    </div>
  );
}

export default App;
