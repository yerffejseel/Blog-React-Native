import React from 'react';
import RootNavigator from './src/RootNavigator';
import { BlogProvider } from "./src/context/BlogContext";

export default function App() {
  return <BlogProvider>
      <RootNavigator />
    </BlogProvider>
}