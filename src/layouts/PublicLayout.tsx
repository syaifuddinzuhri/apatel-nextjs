import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import React from "react";

interface IProps {
  children: ReactNode;
}

const PublicLayout: React.FC<IProps> = ({ children }) => {
  return <Box minH="100vh">{children}</Box>;
};

export default PublicLayout;
