import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

// Get the root container
const container = document.getElementById("root");

// Create a root
const root = createRoot(container);

// Render the app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
