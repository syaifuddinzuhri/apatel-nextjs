import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface IProps {
  title: string;
}
const HeadingSection = ({ title }: IProps) => {
  return (
    <Flex justify="center" py="4">
      <Heading size={{ base: "md", md: "lg" }} color="primary.500">
        {title}
      </Heading>
    </Flex>
  );
};

export default HeadingSection;
