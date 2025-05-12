import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    // provider act as bridge between redux and react
    <Provider store={store}>
      <Header />
      {/*<Outlet> component from React Router is used to render the child routes within a parent route  */}
      <Outlet />
    </Provider>
  );
}

export default App;
