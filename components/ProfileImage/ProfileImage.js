import React from "react";
import { Formik, Field, Form } from "formik";
import NextLink from "next/link";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Image,
  Text,
  useFormControl,
  Wrap,
  WrapItem,
  Spacer,
  Link,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

const ProfileImage = () => {
  return (
    <Flex mt={"4rem"} mb={"2rem"} flexDirection={{ md: "row", base: "column" }}>
      <Image
        borderRadius="full"
        boxSize="100px"
        src="https://th.bing.com/th/id/OIP.ve08lbnFuFhYTD7kHklspgHaFs?pid=ImgDet&rs=1"
        alt="Bruce Banner"
        fit={"cover"}
        alignSelf={{ md: "left", base: "center" }}
      />
      <Box
        flex="flex"
        flex-direction={"column"}
        margin={"1rem"}
        alignContent={{ md: "left", base: "center" }}
      >
        <Text
          fontSize="2xl"
          textAlign={{ md: "left", base: "center" }}
          fontWeight={"bold"}
        >
          Bruce Banner
        </Text>
        <Text textAlign={{ md: "left", base: "center" }}>
          <NextLink href="#" alignSelf={{ md: "left", base: "center" }}>
            <Link color={"blue"}>View Resume</Link>
          </NextLink>
        </Text>
      </Box>
      <Spacer />
      <Button
        as="a"
        aria-label="Edit"
        colorScheme="blue"
        my={5}
        variant="outline"
        w={"150px"}
        alignSelf={{ md: "left", base: "center" }}
      >
        Upload Resume
      </Button>
    </Flex>
  );
};

export default ProfileImage;
