import React from 'react';
import {PaperProvider} from "react-native-paper";
import {AppRegistry} from "react-native";
import {name as appName} from './app.json';
import NavBar from "./components/NavBar";

export default function Main() {

  return (
    <PaperProvider>
      <NavBar/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
