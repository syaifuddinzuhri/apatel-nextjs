import { useUnitsStore } from "@/stores/units";
import { Button, useBreakpointValue } from "@chakra-ui/react";
import { addDays, differenceInDays, format } from "date-fns";
import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";

interface IProps {
  onClose: () => void;
}

const DateRangePickerWithCustomLabels = ({ onClose }: IProps) => {
  const direction = useBreakpointValue({ base: "vertical", md: "horizontal" });

  const { minDate, unitDatesInput, setUnitDatesInput } = useUnitsStore(state => state);
  const [night, setNight] = useState(1);

  const initialDates = {
    startDate: unitDatesInput?.startDate,
    endDate: unitDatesInput?.endDate,
    key: "selection",
  };

  const [dates, setDates] = useState<any>([initialDates]);

  useEffect(() => {
    const nightCount = differenceInDays(
      unitDatesInput?.endDate || new Date(),
      unitDatesInput?.startDate || addDays(new Date(), 1)
    );
    setNight(nightCount);
  }, [unitDatesInput]);

  const handleDateChange = (ranges: any[]) => {
    const newRanges = ranges.map((range: any) => {
      const { startDate, endDate } = range;
      const nightCount = differenceInDays(endDate, startDate);
      setNight(nightCount);

      return {
        ...range,
      };
    });
    setDates(newRanges);
  };

  const renderCustomDayContents = (day: any) => {
    return (
      <span>
        <small
          style={{
            fontSize: "14px",
          }}
        >
          {format(day, "d")}
        </small>
        <small
          className="price-label"
          style={{
            width: "100%",
            fontSize: "10px",
            position: "absolute",
            bottom: -20,
            left: 0,
          }}
        >
          20k
        </small>
      </span>
    );
  };

  const handleApply = () => {
    const { startDate, endDate } = dates[0];
    setUnitDatesInput({
      startDate: startDate,
      endDate: endDate,
    });
    onClose();
  };

  return (
    <div>
      <DateRangePicker
        moveRangeOnFirstSelection={false}
        onChange={item => handleDateChange([item.selection])}
        months={2}
        ranges={dates}
        minDate={minDate}
        direction={direction as "vertical" | "horizontal"}
        // dayContentRenderer={renderCustomDayContents}
      />
      <Button onClick={handleApply} w={"full"} _hover={{ background: "primary.600" }}>
        Apply ({night} Night)
      </Button>
    </div>
  );
};

export default DateRangePickerWithCustomLabels;
