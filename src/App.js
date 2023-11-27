import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/features/counterSlice";

//! Base Css
const myStyle = {
  counterText: {
    fontSize: "5vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  btnHeight: {
    minHeight: "250px",
  },
};

//! Main App
function App() {
  const counter = useSelector((state) => {
    debugger;
    return state.counter.counter;
  });
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="text-center display-6">🔄 COUNTER APP 🔄</h1>
        <div className="card shadow-lg mt-4">
          <div className="row">
            <div className="col-4 col-sm-4 col-md-3 col-lg-3">
              <div className="row">
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-dark w-100"
                    style={myStyle.btnHeight}
                    onClick={() => {
                      debugger;
                      dispatch(decrement());
                    }}
                  >
                    ➖
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-4 col-md-6 col-lg-6">
              <div className="card-body" style={myStyle.counterText}>
                {counter}
              </div>
            </div>
            <div className="col-4 col-sm-4 col-md-3 col-lg-3">
              <div className="row">
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-dark w-100"
                    style={myStyle.btnHeight}
                    onClick={() => {
                      debugger;
                      dispatch(increment());
                    }}
                  >
                    ➕
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 fw-bold">🚀 Redux App</div>
      </div>
    </div>
  );
}

export default App;
