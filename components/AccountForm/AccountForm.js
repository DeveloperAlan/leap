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
  Select,
  Spacer,
  Link,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { MdArrowDropDown } from "@chakra-ui/icons";
import { chakra, useMultiStyleConfig } from "@chakra-ui/system";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Input", props);
  const inputProps = useFormControl(props);
  return <chakra.input ref={ref} __css={styles.field} {...inputProps} />;
});

// // eslint-disable-next-line react/display-name
// const Select = React.forwardRef((props, ref) => {
//   const styles = useMultiStyleConfig("Select", props);
//   const inputProps = useFormControl(props);
//   return <chakra.select ref={ref} __css={styles.field} {...inputProps} />;
// });

const AccountForm = ({ account, handleSubmit, isEdit, formRef }) => {
  return (
    <>
      <hr></hr>
      <Formik
        enableReinitialize
        innerRef={formRef}
        initialValues={account.details}
        // validate={(values) => {
        //   const errors = {};
        // }}
        onSubmit={(values, actions) => {
          handleSubmit(values);
        }}
      >
        {(props) => (
          <Form>
            <Box
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              mt={"2rem"}
              pb={"4rem"}
            >
              <Field name="firstName">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="first-name"
                      isRequired
                      isInvalid
                      isDisabled={isEdit ? false : true}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <FormLabel>First name</FormLabel>
                      <Input {...field} placeholder="First Name" />
                      {/* <FormErrorMessage>{form.error.firstName}</FormErrorMessage> */}
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="lastName">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="last-name"
                      isRequired
                      isInvalid
                      isDisabled={isEdit ? false : true}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <FormLabel>Last name</FormLabel>
                      <Input {...field} placeholder="Last Name" />
                      <FormErrorMessage>
                        Your Last name is invalid
                      </FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="email">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="email"
                      isRequired
                      isInvalid
                      isDisabled={isEdit ? false : true}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <FormLabel>Email</FormLabel>
                      <Input {...field} placeholder="Email" />
                      <FormErrorMessage>Your Email is invalid</FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="phoneNumber">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="phone-number"
                      isRequired
                      isInvalid
                      isDisabled={isEdit ? false : true}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <FormLabel>Phone Number</FormLabel>
                      <Input {...field} placeholder="Phone Number" />
                      <FormErrorMessage>
                        Your Phone Number is invalid
                      </FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="postcode">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="postcode"
                      isRequired
                      isInvalid
                      isDisabled={isEdit ? false : true}
                      w={{ base: "48%" }}
                    >
                      <FormLabel>Postcode</FormLabel>
                      <Input {...field} placeholder="Postcode" />
                      <FormErrorMessage>
                        Your Postcode is invalid
                      </FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="state">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="state"
                      isRequired
                      isInvalid
                      isDisabled={isEdit ? false : true}
                      w={{ base: "48%" }}
                    >
                      <FormLabel>State</FormLabel>
                      <Select
                        {...field}
                        id="country"
                        placeholder="Select country"
                      >
                        <option>NSW</option>
                        <option>Victoria</option>
                        <option>South Australia</option>
                        <option>Western Australia</option>
                        <option>Northern Territory</option>
                        <option>Queensland</option>
                        <option>Tasmania</option>
                        <option>ACT</option>
                      </Select>
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="companyName">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="company-name"
                      w={{ base: "100%", md: "48%" }}
                      isDisabled={isEdit ? false : true}
                    >
                      <FormLabel>Company Name</FormLabel>
                      <Input {...field} placeholder="Company Name" />
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="abn">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="abn"
                      w={{ base: "100%", md: "48%" }}
                      isDisabled={isEdit ? false : true}
                    >
                      <FormLabel>ABN</FormLabel>
                      <Input {...field} placeholder="ABN" />
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="rate">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="hourly-rate"
                      isRequired
                      isInvalid
                      isDisabled={isEdit ? false : true}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <FormLabel>Hourly Rate</FormLabel>
                      <InputGroup>
                        <InputLeftAddon bgColor={"gray.300"}>$</InputLeftAddon>
                        <Input {...field} placeholder="Hourly Rate" />
                      </InputGroup>
                      <FormErrorMessage>
                        Your Hourly Rate is required
                      </FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="dob">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="dob"
                      isRequired
                      isInvalid
                      isDisabled={isEdit ? false : true}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <FormLabel>Date of Birth</FormLabel>
                      <SingleDatepicker
                        {...field}
                        date={field.value}
                        onChange={(date) => setStartDate(date)}
                      />
                      <FormErrorMessage>
                        Your Date of Birth is required
                      </FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AccountForm;
