import React from 'react';
import './App.css';
import Routes from './config/router';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import {store, persistor} from './config/store'

function App() {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Routes></Routes>
    </PersistGate>
    </Provider>
}

export default App;