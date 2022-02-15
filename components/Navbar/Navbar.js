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
          {props.isEdit ? (
            <IconButton
              aria-label="Back to Account"
              icon={<ArrowBackIcon />}
              mr={"1rem"}
              onClick={() => {
                props.resetForm();
              }}
            />
          ) : null}

          <NextLink href="/account" passHref display={"block"}>
            <Text fontSize={{ md: "4xl", base: "2xl" }}>My Account</Text>
          </NextLink>
        </Box>

        <Spacer />

        {props.isEdit ? (
          <Button
            aria-label="Save"
            colorScheme="blue"
            my={5}
            onClick={() => {
              props.saveAccount();
            }}
          >
            Save
          </Button>
        ) : (
          <NextLink href="/account?edit=true" passHref>
            <Button as="a" aria-label="Edit" colorScheme="blue" my={5}>
              Edit
            </Button>
          </NextLink>
        )}
      </Box>
    </Center>
  );
};

Navbar.propTypes = {};

export default Navbar;
