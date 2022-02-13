import React from "react";
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
import { chakra, useMultiStyleConfig } from "@chakra-ui/system";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Input", props);
  const inputProps = useFormControl(props);
  return <chakra.input ref={ref} __css={styles.field} {...inputProps} />;
});

const AccountForm = ({}) => {
  return (
    <>
      <form>
        <Flex
          mt={"4rem"}
          mb={"2rem"}
          flexDirection={{ md: "row", base: "column" }}
        >
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
        <hr></hr>
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          mt={"2rem"}
          pb={"4rem"}
        >
          <FormControl
            id="first-name"
            isRequired
            isInvalid
            w={{ base: "100%", md: "48%" }}
          >
            <FormLabel>First name</FormLabel>
            <Input placeholder="First Name" />
            <FormErrorMessage>Your First name is invalid</FormErrorMessage>
          </FormControl>
          <FormControl
            id="last-name"
            isRequired
            isInvalid
            w={{ base: "100%", md: "48%" }}
          >
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last Name" />
            <FormErrorMessage>Your First name is invalid</FormErrorMessage>
          </FormControl>
          <FormControl
            id="email"
            isRequired
            isInvalid
            w={{ base: "100%", md: "48%" }}
          >
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" />
            <FormErrorMessage>Your Email is invalid</FormErrorMessage>
          </FormControl>
          <FormControl
            id="phone-number"
            isRequired
            isInvalid
            w={{ base: "100%", md: "48%" }}
          >
            <FormLabel>Phone Number</FormLabel>
            <Input placeholder="Phone Number" />
            <FormErrorMessage>Your Phone Number is invalid</FormErrorMessage>
          </FormControl>
          <FormControl id="postcode" isRequired isInvalid w={{ base: "48%" }}>
            <FormLabel>Postcode</FormLabel>
            <Input placeholder="Postcode" />
            <FormErrorMessage>Your Postcode is invalid</FormErrorMessage>
          </FormControl>
          <FormControl id="state" isRequired isInvalid w={{ base: "48%" }}>
            <FormLabel>State</FormLabel>
            <Input placeholder="Select state" />
          </FormControl>
          <FormControl id="company-name" w={{ base: "100%", md: "48%" }}>
            <FormLabel>Company Name</FormLabel>
            <Input placeholder="Company Name" />
          </FormControl>
          <FormControl id="abn" w={{ base: "100%", md: "48%" }}>
            <FormLabel>ABN</FormLabel>
            <Input placeholder="ABN" />
          </FormControl>
          <FormControl
            id="hourly-rate"
            isRequired
            isInvalid
            w={{ base: "100%", md: "48%" }}
          >
            <FormLabel>Hourly Rate</FormLabel>
            <InputGroup>
              <InputLeftAddon bgColor={"gray.300"}>$</InputLeftAddon>
              <Input placeholder="Hourly Rate" />
            </InputGroup>
            <FormErrorMessage>Your Hourly Rate is required</FormErrorMessage>
          </FormControl>
          <FormControl
            id="dob"
            isRequired
            isInvalid
            w={{ base: "100%", md: "48%" }}
          >
            <FormLabel>Date of Birth</FormLabel>
            <Input placeholder="Date of Birth" />
            <FormErrorMessage>Your Date of Birth is required</FormErrorMessage>
          </FormControl>
        </Box>
      </form>
    </>
  );
};

export default AccountForm;
