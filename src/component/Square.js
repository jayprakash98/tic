import "../App.css";

function Square({ value, onClick }) {
  return (
    <div onClick={onClick} className="square">
      <h5>{value}</h5>
    </div>
  );
}

export default Square;
