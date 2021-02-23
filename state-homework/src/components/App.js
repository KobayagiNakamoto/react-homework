import { useState } from "react";

const App = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  // const arr = [1, 2, 3];
  // const [, , three] = arr;
  // console.log(three);
  // const value = useState(0);
  // const firstValue = value[0];
  // const setFirstValue = value[1];

  const onChangefirstName = (event) => {
    setFirstName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const onChangeGender = (event) => {
    setGender(event.target.value);
  };

  const toggleVisibilty = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="First Name"
        value={firstname}
        onChange={onChangefirstName}
      />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        value={lastname}
        onChange={onChangeLastName}
      />
      <br />
      <input type="text" placeholder="Age" value={age} onChange={onChangeAge} />
      <br />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={onChangeAddress}
      />
      <br />
      <input
        type="text"
        placeholder="Gender"
        value={gender}
        onChange={onChangeGender}
      />
      <br />
      <button onClick={toggleVisibilty}> Toggle Visibility</button>
      {console.log(isInputVisible.toString())}
      {isInputVisible && (
        <div>
          <p>{firstname}</p>
          <p>{lastname}</p>
          <p>{age}</p>
          <p>{address}</p>
          <p>{gender}</p>
        </div>
      )}
      <br />
      <img
        onClick={handleCounter}
        src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        alt="Back to the future"
      />
      <p>{counter}</p>
    </div>
  );
};

export default App;
