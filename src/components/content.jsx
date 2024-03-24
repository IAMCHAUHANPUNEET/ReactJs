import "./Content.css";
function Content({ handleOnClick1, text }) {
  return (
    <>
      <div className="Parent">
        <div className="content">
          <h1 className="heading">Qoutes:</h1>
          <p className="qoutes">{text}</p>
          <button className="next" onClick={handleOnClick1}>
            {" "}
            Next
          </button>
        </div>
      </div>
    </>
  );
}
export default Content;
