import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = (props) => {
  return (
    <Center bgColor={"white"} flex={"flex"}>
      <Box
        flexWrap={"row"}
        display={"flex"}
        minW={{ base: "100%" }}
        padding={"1rem"}
      >
        <Box w={"50%"} alignItems={"center"} display={"flex"}>
          <IconButton
            aria-label="Back to Account"
            icon={<ArrowBackIcon />}
            mr={"1rem"}
          />
          <NextLink href="/account" passHref display={"block"}>
            <Text fontSize={{ md: "4xl", base: "2xl" }}>My Account</Text>
          </NextLink>
        </Box>

        <Spacer />

        <NextLink href="/account?edit" passHref>
          <Button as="a" aria-label="Edit" colorScheme="blue" my={5}>
            Edit
          </Button>
        </NextLink>

        <NextLink href="/account" passHref>
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
