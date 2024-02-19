/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import React, { useEffect } from "react";

import { useUserStore } from "@/stores/user";
import Navbar from "./components/Navbar";

interface IProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<IProps> = ({ children }) => {
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure({ defaultIsOpen: true });
  const setUser = useUserStore(state => state.setUser);
  const router = useRouter();

  const [isBreakpoint] = useMediaQuery("(min-width: 48rem)");

  useEffect(() => {
    const handleRouteChange = () => {};

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    !isBreakpoint ? onClose() : onOpen();
  }, [isBreakpoint]);

  useEffect(() => {}, []);

  return (
    <Box minH={"100vh"} transition={"all 0.3s ease"} paddingX={{ base: 6, md: 24 }}>
      <Navbar />
      {children}
    </Box>
  );
};

export default DashboardLayout;
