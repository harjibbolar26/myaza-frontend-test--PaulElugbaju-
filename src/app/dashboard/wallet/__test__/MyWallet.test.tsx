import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyWallet from "../page";
import { RecentTtransactions } from "../../constant";
import Sidebar from "../../(home)/component/Sidebar";

describe("MyWallet Component", () => {
  test("renders My Wallets heading and description", () => {
    render(<MyWallet />);

    expect(screen.getByText("My Wallets")).toBeInTheDocument();
    expect(
      screen.getByText("Manage all your wallets from here")
    ).toBeInTheDocument();
  });

  test("toggles the sidebar when the menu button is clicked", () => {
    render(<MyWallet />);

    expect(screen.queryByText("Close Sidebar")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("menu-icon"));
    render(<Sidebar />);
  });

  test("renders mobile transaction cards when screen is small", () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));

    render(<MyWallet />);

    RecentTtransactions.forEach((tx) => {
      expect(screen.getAllByText(tx.name).length).toBeGreaterThan(0);
    });
  });

  test("renders Recent Transactions component on large screen", () => {
    global.innerWidth = 1200;
    global.dispatchEvent(new Event("resize"));

    render(<MyWallet />);

    expect(screen.getAllByText("Recent Transactions").length).toBeGreaterThan(
      0
    );
  });

  test("renders 'See All' link for mobile", () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));

    render(<MyWallet />);

    expect(screen.getByText("See All")).toBeInTheDocument();
  });
});
