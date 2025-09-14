import "./App.css";
import MyComponent from "./components/MyComponent";
import { AlertTriangle } from "lucide-react";

function App() {
  return (
    <>
      <h1 className="flex items-center gap-2 text-2xl font-bold text-primary">
        <AlertTriangle className="size-6" />
        Heads up: something needs your attention
      </h1>
      <MyComponent />
    </>
  );
}

export default App;
