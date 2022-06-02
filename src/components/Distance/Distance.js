import "./Distance.css";

function Distance(props) {
  return (
    <div>
      <div className='distance-container'>
        <p>Distance</p>
        {!props.showDetails ? "" : <h3>{}</h3>}
      </div>
      <div className='distance-text'>
        {!props.showDetails ? (
          ""
        ) : (
          <p>
            The distance between <strong>{props.origin}</strong> and{" "}
            <strong>{props.destination}</strong> is <strong>{}kms</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default Distance;
