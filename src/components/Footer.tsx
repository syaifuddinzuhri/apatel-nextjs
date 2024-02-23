import { useGetSettingByParam } from "@/api/settings";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const { data: address, isLoading } = useGetSettingByParam("address");

  return (
    <Box>
      <Box as="footer" width="100%" bg="gray.50" py="8" paddingX={{ base: 6, md: 24 }} mt="8">
        <Flex justify="center" align="center" direction="column" gap={3}>
          <Image src={"/images/full-logo.png"} alt="Logo" />
          <Text fontSize={{ base: "sm", md: "md" }} align="center">
            {address?.data.value || ""}
          </Text>
        </Flex>
      </Box>
      <Box as="footer" width="100%" bg="primary.500" color="white" py="4" paddingX={{ base: 6, md: 24 }}>
        <Flex justify="center" align="center">
          <Text>&copy; 2024 Apatel Indonesia</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
