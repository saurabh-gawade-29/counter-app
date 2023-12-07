import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementfive,
  decrementfive,
  reset,
} from "./redux/features/counterSlice";

//! Base Css
const myStyle = {
  counterText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  btnHeight: {
    minHeight: "60px",
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
        <h1 className="text-center display-6">COUNTER APP</h1>
        <div className="mt-4">
          <div className="row justify-content-center">
            <div className="col-4 col-sm-4 col-md-4 col-lg-1">
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
            <div className="col-4 col-sm-4 col-md-4 col-lg-1">
              <div className="" style={myStyle.counterText}>
                {counter}
              </div>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-1">
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
        <div className="my-2">
          <div className="row  justify-content-center">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 d-grid my-2">
              <button
                className="btn btn-dark btn-block-primary"
                onClick={() => dispatch(reset())}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="text-center my-2 fw-bold">🚀 Redux Toolkit App</div>
      </div>
    </div>
  );
}

export default App;
