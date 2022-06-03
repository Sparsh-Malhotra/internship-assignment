import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import Distance from "../Distance/Distance";
import "./Main.css";

function Main() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  function onChangeOrigin(e) {
    setOrigin(e.target.value);
    if (showDetails) setShowDetails(false);
  }

  function onChangeDestination(e) {
    setDestination(e.target.value);
    if (showDetails) setShowDetails(false);
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
            <div className='input-container'>
              <label>Origin</label>
              <IoLocationSharp className='icon1'></IoLocationSharp>
              <input
                type='text'
                onChange={onChangeOrigin}
                value={origin}
              ></input>
              <label>Destination</label>
              <IoLocationSharp className='icon2'></IoLocationSharp>
              <input
                type='text'
                onChange={onChangeDestination}
                value={destination}
              ></input>
            </div>
            <button onClick={handleCalculate}>Calculate</button>
          </div>
          <Distance
            origin={origin}
            destination={destination}
            showDetails={showDetails}
          ></Distance>
        </div>
        <div className='map'>
          {!showDetails ? (
            <iframe
              title='Static Map'
              width='600'
              height='450'
              style={{ border: 0 }}
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJkbeSa_BfYzARphNChaFPjNc&key=${process.env.REACT_APP_GOOGLE_MAP_IFRAME_KEY}`}
            ></iframe>
          ) : (
            <iframe
              title='Direction Map'
              width='600'
              height='450'
              style={{ border: 0 }}
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/directions?origin=${origin}&destination=${destination}&key=${process.env.REACT_APP_GOOGLE_MAP_IFRAME_KEY}`}
            ></iframe>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
