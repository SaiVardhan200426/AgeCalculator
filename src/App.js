import React, { useState } from 'react';


function App() {
 const [dob, setDob] = useState('');
 const [age, setAge] = useState('');

 const calculateAge = () => {
    const birthDate = new Date(dob);
    const differenceInMS = Date.now() - birthDate.getTime();
    const ageDate = new Date(differenceInMS);
    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
 };

 return (
    <div className="App">
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      <p>Your are {age} years old</p>
    </div>
 );
}

export default App;