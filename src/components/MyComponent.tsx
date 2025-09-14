import { AlertTriangle } from "lucide-react";

export default function MyComponent() {
  return (
    <div>
      <h1 className="text-primary">Welcome to my component</h1>
      <h1 className="text-2xl font-bold">
        <span className="inline-flex items-center gap-2 rounded-md bg-warning/15 px-3 py-1.5 text-warning">
          <AlertTriangle className="size-5" />
          Heads up: something needs your attention
        </span>
      </h1>
    </div>
  );
}
