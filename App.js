import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from "./components/Timer/presenter";
import reducer from "./reducer";
import { createStore} from 'redux';
import { Provider} from "react-redux";

let store = createStore(reducer);
console.log(  store.getState()); // getState를 하기 위해서는 reducer의 default일 때 state를 주어야함. 

export default class App extends Component {

  render(){
     console.log(store.getState());
    return (
      <Provider store={store} >
      <Timer></Timer>
      </Provider>
    );  
  }
}
