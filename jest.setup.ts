// jest.setup.js or jest.setup.ts
import "@testing-library/jest-dom"; // Extends Jest with useful DOM matchers

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
