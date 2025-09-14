import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("renders the component with initial content", () => {
  render(<MyComponent />);
  expect(screen.getByText(/welcome to my component/i)).toBeInTheDocument();
});
