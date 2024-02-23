import {
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Slide,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { MdClose, MdList, MdListAlt } from "react-icons/md";
import MenuNav from "./MenuNav";
import { HamburgerIcon } from "@chakra-ui/icons";

interface IProps {
  isOpen: boolean;
  handleToggle: any;
}

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        display={{ base: "flex", md: "none" }}
        ref={btnRef}
        aria-label="Close Menu"
        colorScheme="secondary"
        variant="outline"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        size="xl"
        p={1}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justifyContent="space-between" alignItems="center">
              <Image src={"/images/full-logo.png"} alt="Logo" width={90} />
              <CloseButton onClick={onClose} />
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing={4} mt={5}>
              <MenuNav isOpen={isOpen} />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
