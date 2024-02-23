import { Box, Button, Flex, IconButton, Image, Link, Stack } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { MdOutlineAppRegistration, MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import { HamburgerIcon } from "@chakra-ui/icons";
import MenuNav from "./MenuNav";

const DesktopMenu = () => {
  return (
    <>
      <Image src={"/images/full-logo.png"} alt="Logo" />
      <Flex display={{ base: "none", md: "flex" }} align="center">
        <Flex direction="row" gap={4} align="center">
          <MenuNav isOpen={false} />
        </Flex>
      </Flex>
    </>
  );
};

export default DesktopMenu;
