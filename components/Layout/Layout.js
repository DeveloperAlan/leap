import React from "react";
import Navbar from "components/Navbar";
import { Box, Container } from "@chakra-ui/react";

const Layout = (props) => {
  const { children } = props;
  return (
    <Box bgColor={"#eeeeee"}>
      <Navbar />
      <Container maxW="container.xl" marginBottom="lg">
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
