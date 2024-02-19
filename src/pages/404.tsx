import React from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { MdArrowBack } from "react-icons/md";

const NotFoundPage = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" flexDirection="column">
      <Heading size="2xl">404</Heading>
      <Text fontSize="xl">Page Not Found</Text>
      <NextLink href="/" passHref>
        <Button colorScheme="secondary" mt={2} size="xs" w="full" variant="outline" leftIcon={<MdArrowBack />}>
          Back to home
        </Button>
      </NextLink>
    </Flex>
  );
};

export default NotFoundPage;
