import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import Home from './pages/home';

class App extends React.Component {
  render() {
    return (
      // store k la gì vs giao diện chỉ là phân phối store data cho toàn bộ app;
      <Provider store={store}>
        <Home/>
     </Provider>
    );
  }
}

export default App;
