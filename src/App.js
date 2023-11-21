import "./App.css";

const myStyle = {
  counterText: {
    fontSize: "8rem",
    textAlign: "center",
  },
  btnHeight: {
    minHeight: "250px",
  },
};
function App() {
  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="text-center display-6">COUNTER</h1>
        <div className="card shadow-lg mt-4">
          <div className="row">
            <div className="col-3">
              <div className="row">
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-dark w-100"
                    style={myStyle.btnHeight}
                  >
                    ➖
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card-body" style={myStyle.counterText}>
                0
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-dark w-100"
                    style={myStyle.btnHeight}
                  >
                    ➕
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
