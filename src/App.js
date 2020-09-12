import React from "react";

function App() {
  //variable 
  const [message, setMessage] = React.useState("Javascript is cool!");

  function handleClick() {
    setMessage("New Message!");
  }
  //temaplate
  return (
   <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the Message</button>
    </div>
  );
}

//access to app in other file
export default App;
