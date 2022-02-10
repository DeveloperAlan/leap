import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useFormControl,
  Wrap,
  WrapItem,
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
        <Box display={{ md: "flex" }}>
          <FormControl id="first-name" isRequired isInvalid>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First Name" />
            <FormErrorMessage>Your First name is invalid</FormErrorMessage>
          </FormControl>
          <FormControl id="last-name" isRequired isInvalid>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last Name" />
            <FormErrorMessage>Your First name is invalid</FormErrorMessage>
          </FormControl>
          <FormControl id="email" isRequired isInvalid>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" />
            <FormErrorMessage>Your Email is invalid</FormErrorMessage>
          </FormControl>
          <FormControl id="phone-number" isRequired isInvalid>
            <FormLabel>Phone Number</FormLabel>
            <Input placeholder="Phone Number" />
            <FormErrorMessage>Your Phone Number is invalid</FormErrorMessage>
          </FormControl>
          <FormControl id="postcode" isRequired isInvalid>
            <FormLabel>Postcode</FormLabel>
            <Input placeholder="Postcode" />
            <FormErrorMessage>Your Postcode is invalid</FormErrorMessage>
          </FormControl>
          <FormControl id="state" isRequired isInvalid>
            <FormLabel>State</FormLabel>
            <Input placeholder="Select state" />
          </FormControl>
          <FormControl id="company-name" isRequired isInvalid>
            <FormLabel>Company Name</FormLabel>
            <Input placeholder="Company Name" />
            <FormErrorMessage>Your company name is required</FormErrorMessage>
          </FormControl>
          <FormControl id="abn" isRequired isInvalid>
            <FormLabel>ABN</FormLabel>
            <Input placeholder="ABN" />
            <FormErrorMessage>Your ABN is required</FormErrorMessage>
          </FormControl>
          <FormControl id="hourly-rate" isRequired isInvalid>
            <FormLabel>Hourly Rate</FormLabel>
            <Input placeholder="Hourly Rate" />
            <FormErrorMessage>Your Hourly Rate is required</FormErrorMessage>
          </FormControl>
          <FormControl id="dob" isRequired isInvalid>
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
