import React, { useRef } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Spacer,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import useProfileImage from "hooks/ProfileImage";

const ProfileImage = ({ name }) => {
  const { profileImage, setProfileImage } = useProfileImage();
  const imageRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => imageRef.current?.click();
  const handleFileUpload = (e) => {
    const picture = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        setProfileImage(reader.result);
      },
      false
    );

    if (picture) {
      reader.readAsDataURL(picture);
    }
  };
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
          <Button p={0} colorScheme="none" onClick={onOpen}>
            <Link color={"blue"}>View Avatar</Link>
          </Button>
        </Text>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Image src={profileImage} alt={`${name}`} fit={"cover"} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
      <Spacer />

      <input
        type="file"
        multiple
        accept="image/*"
        hidden
        ref={(e) => {
          imageRef.current = e;
        }}
        onChange={handleFileUpload}
      />

      <Button
        as="a"
        aria-label="Edit"
        colorScheme="blue"
        my={5}
        variant="outline"
        w={"150px"}
        alignSelf={{ md: "left", base: "center" }}
        onClick={handleClick}
      >
        Update Avatar
      </Button>
    </Flex>
  );
};

export default ProfileImage;
