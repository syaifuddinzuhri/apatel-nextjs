import {
  Box,
  Button,
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
        colorScheme="primary"
        variant="outline"
        icon={<MdList />}
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
              <IconButton
                aria-label="Close Menu"
                colorScheme="dark"
                variant="outline"
                icon={<MdClose />}
                onClick={onClose}
                size="xl"
                p={1}
              />
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
