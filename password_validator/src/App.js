import { useState } from "react";
import { isStrongPassword } from "validator";
import "./App.css";

function App() {
  const [errorMsg, setErrorMsg] = useState("");
  const validate = (value) => {
    if (
      isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMsg("Is Strong Password");
    } else {
      setErrorMsg("Is Not Strong Password");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Checking password strength in ReactJS</h1>
        <label htmlFor="password">
          Username :<span>Enter Password: </span>
          <input
            type="text"
            name="password"
            onChange={(e) => validate(e.target.value)}
          ></input>{" "}
          <br />
          {errorMsg === "" ? null : (
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {errorMsg}
            </span>
          )}
        </label>
      </header>
    </div>
  );
}

export default App;
