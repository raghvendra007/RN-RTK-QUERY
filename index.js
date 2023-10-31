/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import store from './redux/Store';
import {myPost} from './redux/api';
const AppMain = () => {
  return (
    <ApiProvider api={myPost}>
      <App />
    </ApiProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppMain);
