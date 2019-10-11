import React from "react";
import Smurfs from "./components/Smurfs";
import "./App.css";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as reducers from "./state/reducers";
import Form from "./components/Form";

export default function App() {
  const monsterReducer = combineReducers({
    smurfsData: reducers.smurfDataReducer,
    form: reducers.form,
  });
  const store = createStore(
    monsterReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return (
    <Provider store={store}>
      <Smurfs />
      <Form />
    </Provider>
  );
}








// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

// export default App;
