import React, { useEffect, useMemo } from "react";
import { Button, Divider, IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {
  MdOutlineAppRegistration,
  MdOutlineInfo,
  MdOutlineLogin,
  MdOutlineLogout,
  MdOutlineQuestionMark,
  MdPerson2,
  MdQuestionMark,
} from "react-icons/md";
import NextLink from "next/link";
import { getAccessToken } from "@/utils/auth/helpers";

interface IProps {
  isOpen: boolean;
}

const MenuNav = ({ isOpen }: IProps) => {
  const accessToken = getAccessToken();
  const isLoggedIn = useMemo(() => !!accessToken, [accessToken]);

  useEffect(() => {}, [isLoggedIn]);

  const menus = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about-us" },
    { label: "Partnership", link: "/partnership" },
    { label: "Promo", link: "/promo" },
    { label: "Info", link: "/promo" },
    { label: "FAQ", link: "/promo" },
  ];
  return (
    <>
      {menus.map((menu: any, i: number) => (
        <NextLink href={menu.link} passHref key={i}>
          <Link _hover={{ color: "primary.500" }}>{menu.label}</Link>
        </NextLink>
      ))}
      {isOpen && <Divider pt={2} />}
      {!isLoggedIn && (
        <>
          <NextLink href="/register" passHref>
            <Button
              colorScheme="primary"
              size="xs"
              w="full"
              variant="solid"
              _hover={{ background: "primary.600" }}
              leftIcon={<MdOutlineAppRegistration />}
            >
              Sign Up
            </Button>
          </NextLink>
          <NextLink href="/login" passHref>
            <Button
              colorScheme="primary"
              size="xs"
              w="full"
              variant="outline"
              _hover={{ background: "primary.50" }}
              leftIcon={<MdOutlineLogin />}
            >
              Login
            </Button>
          </NextLink>
        </>
      )}
      {!isOpen && isLoggedIn && (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MdPerson2 />}
            variant="outline"
            isRound={true}
            p={2}
          />
          <MenuList>
            <NextLink href="/profile" passHref>
              <MenuItem icon={<MdPerson2 />}>Profile</MenuItem>
            </NextLink>
            <MenuItem icon={<MdOutlineLogout />}>Logout</MenuItem>
          </MenuList>
        </Menu>
      )}

      {isOpen && isLoggedIn && (
        <>
          <NextLink href="/profile" passHref>
            <Button
              colorScheme="primary"
              size="xs"
              w="full"
              variant="outline"
              _hover={{ background: "primary.50" }}
              leftIcon={<MdPerson2 />}
            >
              Profile
            </Button>
          </NextLink>
          <Button
            colorScheme="primary"
            size="xs"
            variant="outline"
            _hover={{ background: "primary.50" }}
            leftIcon={<MdOutlineLogout />}
          >
            Log Out
          </Button>
        </>
      )}
    </>
  );
};

export default MenuNav;
