import { useState } from "react";
import { Hush , Salo } from './index.jsx';

// ---- ASOSIY APP ----

function App() {
  return (
    <div className='App'>
      < Hush />
      <Salo name="Umrbek" />
      <Salo name="Umrbek1" />
      <Salo name="UMrbek2" />
    </div>
  );
}  
  function ToggleText() {
    const [text, setText] = useState("4.Salom");
    return (
      <div>
        <h2>{text}</h2>
        <button
          onClick={() =>
            setText(
              text === "4.Salom"
                ? "4.Xayr!"
                : "4.Xayr"
            )
          }
        >
          Almashtir
        </button>
      </div>
    );
}

export default App;
