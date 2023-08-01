import React from "react";
import ApplicationNavigator from "./src/Navigator/ApplicationNavigator";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/Store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  );
}
