import { useState } from "react";

const DEFAULT_VALUE =
  "https://th.bing.com/th/id/OIP.ve08lbnFuFhYTD7kHklspgHaFs?pid=ImgDet&rs=1";

export default function useProfileImage() {
  const [profileImage, setProfileImage] = useState(DEFAULT_VALUE);

  return {
    profileImage,
    setProfileImage,
  };
}
