import React from "react";
import { Formik, Field, Form } from "formik";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
  Select,
  useFormControl,
} from "@chakra-ui/react";
import { chakra, useMultiStyleConfig } from "@chakra-ui/system";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import SignupSchema from "utils/ErrorHandling";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Input", props);
  const inputProps = useFormControl(props);
  return <chakra.input ref={ref} __css={styles.field} {...inputProps} />;
});

const AccountForm = ({ account, handleSubmit, isEdit, formRef }) => {
  return (
    <>
      <Formik
        enableReinitialize
        innerRef={formRef}
        initialValues={account.details}
        validationSchema={SignupSchema}
        validateOnChange={false}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({}) => (
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
                      isInvalid={form.errors.firstName ? true : false}
                      isDisabled={isEdit ? false : true}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <FormLabel>First name</FormLabel>
                      <Input {...field} placeholder="First Name" />
                      <FormErrorMessage>
                        {form.errors.firstName}
                      </FormErrorMessage>
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
                      isInvalid={form.errors.lastName ? true : false}
                      isDisabled={isEdit ? false : true}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <FormLabel>Last name</FormLabel>
                      <Input {...field} placeholder="Last Name" />
                      <FormErrorMessage>
                        {form.errors.lastName}
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
                      isInvalid={form.errors.email ? true : false}
                      isDisabled={isEdit ? false : true}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <FormLabel>Email</FormLabel>
                      <Input {...field} placeholder="Email" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
                      isInvalid={form.errors.phoneNumber ? true : false}
                      isDisabled={isEdit ? false : true}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <FormLabel>Phone Number</FormLabel>
                      <Input {...field} placeholder="Phone Number" />
                      <FormErrorMessage>
                        {form.errors.phoneNumber}
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
                      isInvalid={form.errors.postcode ? true : false}
                      isDisabled={isEdit ? false : true}
                      w={{ base: "48%" }}
                    >
                      <FormLabel>Postcode</FormLabel>
                      <Input {...field} placeholder="Postcode" />
                      <FormErrorMessage>
                        {form.errors.postcode}
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
                      isInvalid={form.errors.state ? true : false}
                      isDisabled={isEdit ? false : true}
                      w={{ base: "48%" }}
                    >
                      <FormLabel>State</FormLabel>
                      <Select
                        {...field}
                        id="country"
                        placeholder="Select state"
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
                      <FormErrorMessage>{form.errors.state}</FormErrorMessage>
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
                      isInvalid={form.errors.rate ? true : false}
                      isDisabled={isEdit ? false : true}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <FormLabel>Hourly Rate</FormLabel>
                      <InputGroup>
                        <InputLeftAddon bgColor={"gray.300"}>$</InputLeftAddon>
                        <Input {...field} placeholder="Hourly Rate" />
                      </InputGroup>
                      <FormErrorMessage>{form.errors.rate}</FormErrorMessage>
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
                      isInvalid={form.errors.dob ? true : false}
                      isDisabled={isEdit ? false : true}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <FormLabel>Date of Birth</FormLabel>
                      <SingleDatepicker
                        {...field}
                        date={field.value}
                        onChange={(date) => setStartDate(date)}
                      />
                      <FormErrorMessage>{form.errors.dob}</FormErrorMessage>
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
