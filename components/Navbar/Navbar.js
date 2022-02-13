import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Center bgColor={"white"} flex={"flex"}>
      <Box
        flexWrap={"row"}
        display={"flex"}
        minW={{ base: "100%" }}
        padding={"1rem"}
      >
        <Box w={"50%"} alignItems={"center"} display={"flex"}>
          <NextLink href="/account" passHref display={"block"}>
            <Text fontSize={"4xl"}>My Account</Text>
          </NextLink>
        </Box>

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
      </Box>
    </Center>
  );
};

Navbar.propTypes = {};

export default Navbar;
