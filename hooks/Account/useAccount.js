import { useState } from "react";

const DEFAULT_VALUE = {
  initialised: true,
  firstName: "Bruce",
  lastName: "Banner",
  email: "bruce.banner@marvel.com",
  phoneNumber: "02 0000 0000",
  postcode: "2000",
  state: "NSW",
  companyName: "Marvel",
  abn: "12123123123",
  rate: 379,
  dob: new Date("May 21, 1970"),
};

export default function useAccount() {
  const [data, setDate] = useState(DEFAULT_VALUE);

  return {
    details: data,
  };
}
