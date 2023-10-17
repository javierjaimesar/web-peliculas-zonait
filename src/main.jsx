import ReactDOM from "react-dom/client";
import { DataProvider } from "./assets/context/DataContext";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <App />
  </DataProvider>
);
