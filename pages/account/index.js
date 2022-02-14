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

  let isEdit = router.query.edit === "true" ? true : false;

  const saveAccount = () => {
    formRef.current.handleSubmit();
  };

  const handleSubmit = (data) => {
    account.setDetails(data);
    router.push("/account");
  };

  const resetForm = () => {
    if (isEdit) {
      formRef.current.resetForm();
      router.push("/account");
    }
  };

  return (
    <div>
      <Navbar isEdit={isEdit} saveAccount={saveAccount} resetForm={resetForm} />
      <Container maxW="container.xl" marginBottom="lg">
        <ProfileImage
          name={`${account.details.firstName} ${account.details.lastName}`}
        />
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
