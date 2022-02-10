import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <Flex bgColor={"white"}>
      {/* Desktop */}
      <Center w={"12%"}>
        <NextLink href="/account" passHref>
          <Text fontSize={"4xl"}>My Account</Text>
        </NextLink>
      </Center>

      <Spacer />

      <NextLink href="/about" passHref>
        <Button as="a" aria-label="Edit" colorScheme="blue" my={5}>
          Edit
        </Button>
      </NextLink>

      <NextLink href="/contact" passHref>
        <Button as="a" aria-label="Save" colorScheme="blue" my={5}>
          Save
        </Button>
      </NextLink>
    </Flex>
  );
};

Navbar.propTypes = {};

export default Navbar;
