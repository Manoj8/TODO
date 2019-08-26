/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import Main from './app/components/Main';
import store from './app/store/index'
import Note from './app/components/Note'
import Navigate from './app/components/Navigate'
import { Provider } from 'react-redux'
import {createStackNavigator, createAppContainer} from 'react-navigation';


export default class App extends Component{
  render() {
    return(
      <Provider store={store}>
      <App1 />
      </Provider>
    );
  }
}

const MainNavigator = createStackNavigator({
  Main:Main,Note:Note,Navigate:Navigate
});

const App1 = createAppContainer(MainNavigator);