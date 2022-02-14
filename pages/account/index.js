import { useRef } from "react";
import AccountForm from "components/AccountForm";
import Navbar from "components/Navbar";
import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useAccount from "hooks/Account";

import ProfileImage from "components/ProfileImage";

function AccountIndexPage() {
  const router = useRouter();
  const account = useAccount();
  const formRef = useRef();

  const saveAccount = () => {
    formRef.current.handleSubmit();
  };

  const handleSubmit = (data) => {
    account.setDetails(data);
    router.push("/account");
  };

  const resetForm = () => {
    formRef.current.resetForm();
    router.push("/account");
  };

  console.log(router.query);

  let isEdit = router.query.edit === "true" ? true : false;

  return (
    <div>
      <Navbar isEdit={isEdit} saveAccount={saveAccount} resetForm={resetForm} />
      <Container maxW="container.xl" marginBottom="lg">
        <ProfileImage />
        <hr></hr>
        <AccountForm
          isEdit={isEdit}
          account={account}
          handleSubmit={handleSubmit}
          formRef={formRef}
        />
      </Container>
    </div>
  );
}

export default AccountIndexPage;
