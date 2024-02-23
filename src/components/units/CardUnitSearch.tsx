import { Button, Flex, FormControl, FormLabel, Input, Stack, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Select, type SelectInstance } from "chakra-react-select";
import chakraStyles from "@/configs/selectStyleConfig";
import { SearchIcon } from "@chakra-ui/icons";
import ModalDates from "./ModalDates";
import { useUnitsStore } from "@/stores/units";
import { Calendar } from "react-date-range";
import ModalSingleDate from "./ModalSingleDate";
import { formatDate, formatDefaultDate } from "@/utils/formatter";
import { addDays } from "date-fns";

const typeOptions = [
  { value: "0", label: "Daily" },
  { value: "1", label: "Monthly" },
];

const numberOfMonthOptions = Array.from({ length: 12 }, (_, index) => ({
  value: (index + 1).toString(),
  label: `${index + 1}`,
}));

const guestOptions = Array.from({ length: 4 }, (_, index) => ({
  value: (index + 1).toString(),
  label: `${index + 1}`,
}));

const CardUnitSearch = () => {
  const bookingTypeComponent = useRef<SelectInstance<any> | null>(null);
  const numberOfMonthComponent = useRef<SelectInstance<any> | null>(null);
  const guestComponent = useRef<SelectInstance<any> | null>(null);

  const [unit, setUnit] = useState("");
  const [type, setType] = useState(typeOptions[0]);
  const [months, setMonths] = useState(numberOfMonthOptions[0]);
  const [guests, setGuests] = useState(guestOptions[0]);
  const { isOpen: isOpenModalDates, onOpen: onOpenModalDates, onClose: onCloseModalDates } = useDisclosure();
  const {
    isOpen: isOpenModalSingleDate,
    onOpen: onOpenModalSingleDate,
    onClose: onCloseModalSingleDate,
  } = useDisclosure();

  const { minDate, unitDatesInput, setUnitDatesInput } = useUnitsStore(state => state);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const checkInParam = urlParams.get("check_in");
    const checkOutParam = urlParams.get("check_out");
    if (checkInParam && checkOutParam) {
      const checkInDate = new Date(checkInParam);
      const checkOutDate = new Date(checkOutParam);

      setUnitDatesInput({
        startDate: checkInDate,
        endDate: checkOutDate,
      });
    }
  }, []);

  const handleChangeType = (e: any) => {
    setType(e);
    if (e.value === "0") {
      setUnitDatesInput({
        startDate: unitDatesInput?.startDate,
        endDate: addDays(unitDatesInput?.startDate || minDate, 1),
      });
    } else {
      setUnitDatesInput({
        startDate: unitDatesInput?.startDate,
        endDate: addDays(unitDatesInput?.startDate || minDate, parseInt(months.value) * 30),
      });
    }
  };

  const handleChangeMonth = (e: any) => {
    setMonths(e);
    setUnitDatesInput({
      startDate: unitDatesInput?.startDate,
      endDate: addDays(unitDatesInput?.startDate || minDate, e.value * 30),
    });
  };

  return (
    <Stack
      p={{ base: 3, md: 8 }}
      m={{ base: 3, md: 8 }}
      mt={{ base: -10, md: -70 }}
      borderRadius={{ base: 8, md: 8 }}
      background="white"
      boxShadow="lg"
      zIndex={999}
      position={"relative"}
    >
      <Flex direction={{ base: "column", md: "row" }} justify="center" align="end" gap={4}>
        <FormControl>
          <FormLabel>Search</FormLabel>
          <Input
            type="text"
            id="unit"
            placeholder="Search unit name"
            defaultValue={unit}
            onChange={(e: any) => setUnit(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Booking Type</FormLabel>
          <Select
            id="booking_type"
            chakraStyles={chakraStyles}
            options={typeOptions}
            defaultValue={type}
            onChange={handleChangeType}
            ref={bookingTypeComponent}
          />
        </FormControl>
        {type.value === "1" && (
          <>
            <FormControl>
              <FormLabel>Number of Months</FormLabel>
              <Select
                id="number_of_months"
                chakraStyles={chakraStyles}
                options={numberOfMonthOptions}
                defaultValue={months}
                ref={numberOfMonthComponent}
                onChange={handleChangeMonth}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Check In</FormLabel>
              <Input
                type="text"
                readOnly
                placeholder={`${formatDate(unitDatesInput?.startDate)}`}
                onClick={onOpenModalSingleDate}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Check Out</FormLabel>
              <Input type="text" readOnly placeholder={`${formatDate(unitDatesInput?.endDate)}`} />
            </FormControl>
          </>
        )}
        {type.value === "0" && (
          <FormControl>
            <FormLabel>Booking Dates</FormLabel>
            <Input
              type="text"
              readOnly
              placeholder={`${formatDate(unitDatesInput?.startDate)} to ${formatDate(unitDatesInput?.endDate)}`}
              onClick={onOpenModalDates}
            />
          </FormControl>
        )}
        <FormControl>
          <FormLabel>Guests</FormLabel>
          <Select
            id="guest"
            chakraStyles={chakraStyles}
            options={guestOptions}
            defaultValue={guests}
            ref={guestComponent}
            onChange={(e: any) => setGuests(e)}
          />
        </FormControl>
        {/* <IconButton aria-label="Close Menu" colorScheme="primary" icon={<SearchIcon />} p={2} size="lg" /> */}
      </Flex>
      <Button w={"full"} _hover={{ background: "primary.600" }} leftIcon={<SearchIcon />} mt={3}>
        SEARCH
      </Button>

      <ModalDates isOpen={isOpenModalDates} onClose={onCloseModalDates} />
      <ModalSingleDate isOpen={isOpenModalSingleDate} onClose={onCloseModalSingleDate} />
    </Stack>
  );
};

export default CardUnitSearch;
