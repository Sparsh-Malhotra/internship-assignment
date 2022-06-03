import { useEffect, useState } from "react";
import "./Distance.css";

function Distance(props) {
  const [distance, setDistance] = useState("");

  useEffect(() => {
    if (props.showDetails) {
      var service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [props.origin],
          destinations: [props.destination],
          travelMode: "DRIVING",
        },
        callback
      );

      function callback(response, status) {
        if (response.rows[0].elements[0].distance)
          setDistance(response.rows[0].elements[0].distance.text);
        else setDistance("No Direct Route Found !!");
      }
    }
  }, [props.origin, props.destination, props.showDetails]);

  return (
    <div className='distance-details'>
      <div className='distance-container'>
        <p>Distance</p>
        {!props.showDetails ? "" : <h3>{distance}</h3>}
      </div>
      <div className='distance-text'>
        {!props.showDetails ? (
          ""
        ) : (
          <p>
            The distance between <strong>{props.origin}</strong> and{" "}
            <strong>{props.destination}</strong> is <strong>{distance}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default Distance;
