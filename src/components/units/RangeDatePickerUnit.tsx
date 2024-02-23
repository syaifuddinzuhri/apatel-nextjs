import React, { useState } from "react";
import { Box, Button, Grid, Input } from "@chakra-ui/react";

const CustomRangeDatePicker = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEndDate(event.target.value);
  };

  const handleApply = () => {
    // You can add your logic here to handle the selected date range
    console.log("Selected date range:", startDate, "-", endDate);
  };

  return (
    <Box p={4}>
      <Grid templateColumns="repeat(2, 1fr)" columnGap={4}>
        <Input type="date" placeholder="Start Date" value={startDate} onChange={handleStartDateChange} />
        <Input type="date" placeholder="End Date" value={endDate} onChange={handleEndDateChange} />
      </Grid>
      <Button mt={4} onClick={handleApply}>
        Apply
      </Button>
    </Box>
  );
};

export default CustomRangeDatePicker;
