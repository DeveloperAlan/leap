import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Account from "../../../pages/account";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: {
        edit: "true",
      },
    };
  },
}));

describe("Account", () => {
  it("renders the account page", () => {
    render(<Account />);

    const logo = screen.getByText("My Account");

    expect(logo).toBeInTheDocument();
  });

  it("renders the account page with navbar, profile picture and account details", () => {
    render(<Account />);

    const saveButton = screen.getByRole("button", { name: /Save/ });
    expect(saveButton).toBeInTheDocument();

    const backButton = screen.getByRole("button", { name: "Back to Account" });
    expect(backButton).toBeInTheDocument();

    const name = screen.getByText("Bruce Banner");
    expect(name).toBeInTheDocument();

    const firstNameInput = screen.getByDisplayValue("Bruce");
    expect(firstNameInput).toBeInTheDocument();
  });
});
