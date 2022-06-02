import { useState } from "react";
import Distance from "../Distance/Distance";
import "./Main.css";

function Main() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  function onChangeOrigin(e) {
    setOrigin(e.target.value);
  }

  function onChangeDestination(e) {
    setDestination(e.target.value);
  }

  function handleCalculate(e) {
      setShowDetails(true);
  }

  return (
    <main>
      <p className='heading'>
        Let's calculate <strong>distance</strong> from Google maps
      </p>
      <div className='container'>
        <div className='form'>
          <div className='form-container'>
            <div>
              <label>Origin</label>
              <input
                type='text'
                onChange={onChangeOrigin}
                value={origin}
              ></input>
              <label>Destination</label>
              <input
                type='text'
                onChange={onChangeDestination}
                value={destination}
              ></input>
            </div>
            <button onClick={handleCalculate}>Calculate</button>
          </div>
          <Distance origin={origin} destination={destination} showDetails={showDetails}></Distance>
        </div>
        <div className='map'>Hello</div>
      </div>
    </main>
  );
}

export default Main;
