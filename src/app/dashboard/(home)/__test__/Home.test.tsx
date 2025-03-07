import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../page";
import Sidebar from "../component/Sidebar";

describe("Home Component", () => {
  test("renders the Home component", () => {
    render(<Home />);

    expect(screen.getByText("Welcome Back, Ali")).toBeInTheDocument();
    expect(
      screen.getByText("Here’s what’s happening with your store today.")
    ).toBeInTheDocument();
  });

  test("toggles the sidebar when the menu button is clicked", () => {
    render(<Home />);

    expect(screen.queryByText("Close Sidebar")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("menu-icon"));
    render(<Sidebar />);
  });

  test("renders income and outcome cards with correct text", () => {
    render(<Home />);

    const amounts = screen.getAllByText("$632.000");
    const incomeText = screen.getByText("Total Income");
    const outcomeText = screen.getByText("Total Outcome");

    expect(amounts).toHaveLength(2);
    expect(incomeText).toBeInTheDocument();
    expect(outcomeText).toBeInTheDocument();
  });
});
