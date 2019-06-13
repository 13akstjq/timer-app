import React  from 'react';
import Timer from "./components/Timer/presenter";
import reducer from "./reducer";
import { createStore} from 'redux';
import { Provider} from "react-redux";
const store = createStore(reducer);
console.log(store.getState()); // getState를 하기 위해서는 reducer의 default일 때 state를 주어야함. 

export default class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );  
  }
}
