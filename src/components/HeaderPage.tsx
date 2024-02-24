import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  title: string;
}

const HeaderPage = ({ title }: IProps) => {
  return (
    <Box position="relative" width="100%">
      <Image src="/images/headerbg.png" borderRadius={16} />
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontWeight="bold"
        fontSize={{ base: "xs", md: "5xl" }}
        textAlign="center"
        color="white"
        width="80%"
      >
        {title}
      </Text>
    </Box>
  );
};

export default HeaderPage;
