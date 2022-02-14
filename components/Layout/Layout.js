import React from "react";

import { Box, Container } from "@chakra-ui/react";

const Layout = (props) => {
  const { children } = props;
  return <Box bgColor={"#eeeeee"}>{children}</Box>;
};

export default Layout;
