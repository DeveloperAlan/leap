import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Account from "../../../pages/account";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: {
        edit: "false",
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

    const editButton = screen.getByRole("link", { name: /Edit/i });
    expect(editButton).toBeInTheDocument();

    const name = screen.getByText("Bruce Banner");
    expect(name).toBeInTheDocument();

    const firstNameInput = screen.getByDisplayValue("Bruce");
    expect(firstNameInput).toBeInTheDocument();
  });
});
