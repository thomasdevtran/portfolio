import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

beforeEach(() => {
  window.scrollTo = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
});

function renderPage(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

test("shows the portfolio content immediately and has no placeholder links", () => {
  renderPage();
  expect(
    screen.getByRole("heading", { name: "Hi, I’m Thomas.", level: 1 }),
  ).toBeVisible();
  [
    "Selected projects",
    "Experience",
    "About me",
    "Education",
    "Leadership",
    "Skills & technologies",
    "Let’s connect.",
  ].forEach((name) => {
    expect(screen.getByRole("heading", { name, level: 2 })).toBeInTheDocument();
  });
  expect(
    screen.getByRole("link", { name: /toemasu1452@gmail.com/ }),
  ).toHaveAttribute("href", "mailto:toemasu1452@gmail.com");
  screen
    .getAllByRole("link")
    .forEach((link) => expect(link).not.toHaveAttribute("href", "#"));
});

test("opens a project, exposes architecture, and returns to the work section", () => {
  renderPage();
  fireEvent.click(screen.getByRole("link", { name: "Read about Shoppyist" }));
  expect(
    screen.getByRole("heading", { name: "Shoppyist", level: 1 }),
  ).toBeVisible();
  expect(
    screen.getByRole("heading", { name: "Results & takeaways" }),
  ).toBeInTheDocument();
  expect(document.title).toBe("Shoppyist — Thomas Tran");
  const architecture = screen.getByText("Content Script", {
    selector: "summary",
  });
  fireEvent.click(architecture);
  expect(architecture.closest("details")).toHaveAttribute("open");
  fireEvent.click(screen.getAllByRole("link", { name: "← All projects" })[0]);
  expect(
    screen.getByRole("heading", { name: "Selected projects" }),
  ).toBeVisible();
  expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
});

test("offers live projects alongside résumé work and opens the Block by Cube case study", () => {
  renderPage();
  expect(screen.getByRole("link", { name: "Try live demo" })).toHaveAttribute(
    "href",
    "https://thomasdevtran.github.io/vision_bucket/#/",
  );
  expect(screen.getByRole("link", { name: "Visit website" })).toHaveAttribute(
    "href",
    "https://www.blockbycube.com/",
  );
  expect(
    screen.getByRole("link", { name: "View crawler source" }),
  ).toHaveAttribute("href", "https://github.com/thomasdevtran/UCI-websearch");
  fireEvent.click(screen.getByRole("link", { name: "Block by Cube" }));
  expect(
    screen.getByRole("heading", { name: "Block by Cube", level: 1 }),
  ).toBeVisible();
  expect(screen.getByRole("link", { name: "Visit website" })).toHaveAttribute(
    "target",
    "_blank",
  );
  expect(screen.getByRole("link", { name: "View source" })).toHaveAttribute(
    "href",
    "https://github.com/thomasdevtran/minecraft_block_by_block",
  );
});

test.each(["/project/missing", "/missing"])(
  "provides a recovery link on %s",
  (path) => {
    renderPage(path);
    expect(screen.getByRole("heading", { name: /not found/i })).toBeVisible();
    expect(
      screen.getByRole("link", { name: /back to (projects|home)/i }),
    ).toBeVisible();
  },
);
