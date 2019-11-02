import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [state, setState] = useState({
    message: "Click the button to load data!"
  });

  function fetchData() {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        setState({
          message: response.data.message
        });
      });
  }

  return (
    <div className="App">
      <h1>{state.message}</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}
