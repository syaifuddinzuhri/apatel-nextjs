import React, { useEffect, useMemo } from "react";
import { Box, Button, Divider, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {
  MdOutlineAppRegistration,
  MdOutlineInfo,
  MdOutlineLogin,
  MdOutlineLogout,
  MdOutlineQuestionMark,
  MdPerson2,
  MdQuestionMark,
} from "react-icons/md";
import { getAccessToken } from "@/utils/auth/helpers";
import { Link } from "@/components/link";

interface IProps {
  isOpen: boolean;
}

const MenuNav = ({ isOpen }: IProps) => {
  const accessToken = getAccessToken();
  const isLoggedIn = useMemo(() => !!accessToken, [accessToken]);

  useEffect(() => {}, [isLoggedIn]);

  const menus = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about-us" },
    { label: "Partnership", link: "/partnership" },
    { label: "Promo", link: "/promo" },
    { label: "Info", link: "/promo" },
    { label: "FAQ", link: "/promo" },
  ];
  return (
    <>
      {menus.map((menu: any, i: number) => (
        <Box key={i} _hover={{ color: "primary.500" }}>
          <Link href={menu.link}>{menu.label}</Link>
        </Box>
      ))}
      {isOpen && <Divider pt={2} />}
      {!isLoggedIn && (
        <>
          <Button
            colorScheme="primary"
            size="xs"
            w="full"
            variant="solid"
            _hover={{ background: "primary.600" }}
            // leftIcon={<MdOutlineAppRegistration />}
          >
            <Link href="/register">Sign Up</Link>
          </Button>
          <Button
            colorScheme="primary"
            size="xs"
            w="full"
            variant="outline"
            _hover={{ background: "primary.50" }}
            leftIcon={<MdOutlineLogin />}
          >
            <Link href="/login">Login</Link>
          </Button>
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
            <MenuItem icon={<MdPerson2 />}>
              <Link href="/profile">Profile</Link>
            </MenuItem>
            <MenuItem icon={<MdOutlineLogout />}>Logout</MenuItem>
          </MenuList>
        </Menu>
      )}

      {isOpen && isLoggedIn && (
        <>
          <Button
            colorScheme="primary"
            size="xs"
            w="full"
            variant="outline"
            _hover={{ background: "primary.50" }}
            leftIcon={<MdPerson2 />}
          >
            <Link href="/profile">Profile</Link>
          </Button>
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
