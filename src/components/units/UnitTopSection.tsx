import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import CardUnit from "./CardUnit";
import HeadingSection from "../HeadingSection";
import { useGetPublicUnitsQuery } from "@/api/units";
import { useUnitsStore } from "@/stores/units";
import { addDays, format } from "date-fns";
import UnitListLoading from "../loading/UnitListLoading";
import UnitList from "../home/UnitList";
import { formatSQLDate } from "@/utils/formatter";

const UnitTopSection = () => {
  const { minDate } = useUnitsStore(state => state);

  const { data: unitList, isPending } = useGetPublicUnitsQuery({
    page: 1,
    perPage: 4,
    is_featured: 1,
    check_in: formatSQLDate(minDate),
    check_out: formatSQLDate(addDays(minDate, 1)),
  });

  return (
    <Box>
      <HeadingSection title="Featured Unit Available Now" />
      {isPending ? <UnitListLoading /> : <UnitList data={unitList?.data.data || []} />}
    </Box>
  );
};

export default UnitTopSection;
