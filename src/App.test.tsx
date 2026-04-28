import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders landing page headline and work section", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /i design and build digital work that feels intentional/i,
      level: 1,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", { name: /selected work/i, level: 2 })
  ).toBeInTheDocument();
});
