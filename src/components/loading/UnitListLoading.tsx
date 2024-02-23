import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Skeleton from "react-loading-skeleton";

const UnitListLoading = () => {
  const loadingLength = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
      {Array.from({ length: loadingLength || 4 }).map((_, index) => (
        <GridItem key={index}>
          <Skeleton height={100} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default UnitListLoading;
