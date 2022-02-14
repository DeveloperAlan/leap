import AccountForm from "components/AccountForm";
import Navbar from "components/Navbar";
import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";

function AccountIndexPage() {
  const router = useRouter();
  console.log(router.query);

  let isEdit = router.query.edit === "true" ? true : false;

  return (
    <div>
      <Navbar isEdit={isEdit} />
      <Container maxW="container.xl" marginBottom="lg">
        <AccountForm isEdit={isEdit} />
      </Container>
    </div>
  );
}

export default AccountIndexPage;
