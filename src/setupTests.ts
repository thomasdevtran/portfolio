// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// CRA's jsdom predates the encoding APIs used by React Router 7.
Object.assign(globalThis, { TextEncoder, TextDecoder });

Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  writable: true,
  value: jest.fn(() => null),
});
