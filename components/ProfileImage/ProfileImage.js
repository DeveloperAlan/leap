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
import useProfileImage from "hooks/ProfileImage";

const ProfileImage = ({ name }) => {
  const { profileImage, setProfileImage } = useProfileImage();
  return (
    <Flex mt={"4rem"} mb={"2rem"} flexDirection={{ md: "row", base: "column" }}>
      <Image
        borderRadius="full"
        boxSize="100px"
        src={profileImage}
        alt={`${name}`}
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
          {`${name}`}
        </Text>
        <Text textAlign={{ md: "left", base: "center" }}>
          <a href={profileImage} target="_blank ">
            <Link color={"blue"}>View Profile Picture</Link>
          </a>
        </Text>
      </Box>
      <Spacer />
      <Button
        as="a"
        aria-label="Edit"
        colorScheme="blue"
        my={5}
        variant="outline"
        w={"200px"}
        alignSelf={{ md: "left", base: "center" }}
      >
        Upload Profile Image
      </Button>
    </Flex>
  );
};

export default ProfileImage;
