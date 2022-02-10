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
        <Flex my={"4rem"} padding={"1rem"}>
          <Image
            borderRadius="full"
            boxSize="100px"
            src="https://th.bing.com/th/id/OIP.ve08lbnFuFhYTD7kHklspgHaFs?pid=ImgDet&rs=1"
            alt="Bruce Banner"
            fit={"cover"}
          />
          <Box flex="flex" flex-direction={"column"} margin={"1rem"}>
            <Text fontSize="2xl">Bruce Banner</Text>
            <NextLink href="#">
              <Link color={"blue"}>View Resume</Link>
            </NextLink>
          </Box>
          <Spacer />
          <Button
            as="a"
            aria-label="Edit"
            colorScheme="blue"
            my={5}
            variant="outline"
          >
            Upload Resume
          </Button>
        </Flex>
        <Box
          display={{ md: "flex" }}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
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
          <FormControl
            id="postcode"
            isRequired
            isInvalid
            w={{ base: "100%", md: "48%" }}
          >
            <FormLabel>Postcode</FormLabel>
            <Input placeholder="Postcode" />
            <FormErrorMessage>Your Postcode is invalid</FormErrorMessage>
          </FormControl>
          <FormControl
            id="state"
            isRequired
            isInvalid
            w={{ base: "100%", md: "48%" }}
          >
            <FormLabel>State</FormLabel>
            <Input placeholder="Select state" />
          </FormControl>
          <FormControl
            id="company-name"
            isRequired
            isInvalid
            w={{ base: "100%", md: "48%" }}
          >
            <FormLabel>Company Name</FormLabel>
            <Input placeholder="Company Name" />
            <FormErrorMessage>Your company name is required</FormErrorMessage>
          </FormControl>
          <FormControl
            id="abn"
            isRequired
            isInvalid
            w={{ base: "100%", md: "48%" }}
          >
            <FormLabel>ABN</FormLabel>
            <Input placeholder="ABN" />
            <FormErrorMessage>Your ABN is required</FormErrorMessage>
          </FormControl>
          <FormControl
            id="hourly-rate"
            isRequired
            isInvalid
            w={{ base: "100%", md: "48%" }}
          >
            <FormLabel>Hourly Rate</FormLabel>
            <Input placeholder="Hourly Rate" />
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
