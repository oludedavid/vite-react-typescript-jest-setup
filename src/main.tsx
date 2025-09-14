import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyComponent from "./components/MyComponent.tsx";
import { ModeToggle } from "./components/mode-toggle.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App>
      <ModeToggle />
      <MyComponent />
    </App>
  </StrictMode>
);
