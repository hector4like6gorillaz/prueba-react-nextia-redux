import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "../styles/createGlobalStyles";

import Routes from "./components/Routes";
import { store } from "./components/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
