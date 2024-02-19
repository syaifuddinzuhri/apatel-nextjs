import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" paddingY={4}>
      <DesktopMenu />
      <MobileMenu />
    </Flex>
  );
};

export default Navbar;
