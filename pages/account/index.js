import AccountForm from "components/AccountForm";
import Navbar from "components/Navbar";
import { Container } from "@chakra-ui/react";

function AccountIndexPage() {
  return (
    <div>
      <Navbar />
      <Container maxW="container.xl" marginBottom="lg">
        <AccountForm />
      </Container>
    </div>
  );
}

export default AccountIndexPage;
