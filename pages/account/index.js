import AccountForm from "components/AccountForm";
import Navbar from "components/Navbar";
import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useAccount from "hooks/Account";

import ProfileImage from "components/ProfileImage";

function AccountIndexPage() {
  const router = useRouter();
  const account = useAccount();

  console.log(router.query);

  let isEdit = router.query.edit === "true" ? true : false;

  return (
    <div>
      <Navbar isEdit={isEdit} />
      <Container maxW="container.xl" marginBottom="lg">
        <ProfileImage />
        <hr></hr>
        <AccountForm isEdit={isEdit} account={account} />
      </Container>
    </div>
  );
}

export default AccountIndexPage;
