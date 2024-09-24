import React from 'react';
import RootNavigator from './src/RootNavigator';
import { Provider } from "./src/context/BlogContext";

export default function App() {
  return <Provider>
      <RootNavigator />
    </Provider>
}