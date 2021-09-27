import React from 'react';
import Forms from './components/todo/wform'
import ToDo from './components/todo/todo';
import Header from './components/header/header';

import SettingsProvider from './components/todo/context/context';
export default class App extends React.Component {
  render() {
    return (
      <>
      <SettingsProvider>
          <Header/>
          {/* <Forms/> */}
      <ToDo />
      </SettingsProvider>
    </>
    );
  }
}