import { render } from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
// Setup Redux
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
