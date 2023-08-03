import { useState } from "react";
import "./App.css";
import KeyBoard from "./components/Keyboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <KeyBoard />
      </div>
    </>
  );
}

export default App;
