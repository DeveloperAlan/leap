import { useEffect } from "react";

export default function useAccount() {
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

  useEffect(() => {
    const initialised = JSON.parse(localStorage.getItem("initialised"));

    console.log("initialised", initialised);

    if (!initialised) {
      Object.keys(DEFAULT_VALUE).forEach((key) => {
        localStorage.setItem(key, JSON.stringify(DEFAULT_VALUE[key]));
      });
    }
  }, [DEFAULT_VALUE]);
}
