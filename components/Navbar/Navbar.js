import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Center bgColor={"white"} flex={"flex"}>
      <Box
        flexWrap={"row"}
        display={"flex"}
        minW={{ lg: "container.xl", base: "100%" }}
      >
        {/* Desktop */}

        <Center w={"15%"}>
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
      </Box>
    </Center>
  );
};

Navbar.propTypes = {};

export default Navbar;
