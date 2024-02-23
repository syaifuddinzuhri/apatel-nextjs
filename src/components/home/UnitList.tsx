import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import CardUnit from "../units/CardUnit";

interface IProps {
  data: any[];
}

const UnitList = ({ data }: IProps) => {
  return (
    <Flex flexWrap="wrap" gap={6}>
      {data?.map((item: any, i: number) => (
        <Box key={i} width={{ base: "100%", md: "25%", lg: "25%" }}>
          <CardUnit data={item} />
        </Box>
      ))}
    </Flex>
  );
};

export default UnitList;
