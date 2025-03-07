import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../LoginForm";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockedUseRouter = useRouter as jest.Mock;

describe("LoginForm Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    const mockPush = jest.fn();
    mockedUseRouter.mockReturnValue({
      push: mockPush,
    });
  });

  it("allows user to enter details and navigates on login", async () => {
    render(<LoginForm />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password");
    const loginButton = screen.getByRole("button", { name: /login/i });

    await waitFor(() => {
      fireEvent.change(emailInput, {
        target: { value: "test@example.com" },
      });
    });

    await waitFor(() => {
      fireEvent.change(passwordInput, { target: { value: "password123" } });
    });

    await waitFor(() => {
      expect((emailInput as HTMLInputElement).value).toBe("test@example.com");
      expect((passwordInput as HTMLInputElement).value).toBe("password123");
    });

    await waitFor(() => {
      fireEvent.click(loginButton);
    });

    const { push } = mockedUseRouter();

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith("/dashboard");
    });
  });
});
