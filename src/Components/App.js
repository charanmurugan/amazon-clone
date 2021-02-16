import Header from "./Header";
import store from "../Redux/ConfigureStore";
import Home from "./Home";

import "../styles/App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
