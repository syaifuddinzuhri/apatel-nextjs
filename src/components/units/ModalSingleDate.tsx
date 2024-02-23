import { useUnitsStore } from "@/stores/units";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { addDays } from "date-fns";
import React, { useState } from "react";
import { Calendar } from "react-date-range";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalSingleDate = ({ isOpen, onClose }: IProps) => {
  const { minDate, setUnitDatesInput } = useUnitsStore(state => state);
  const [date, setDate] = useState(minDate);

  const handleApply = () => {
    setUnitDatesInput({
      startDate: date,
      endDate: addDays(date, 30),
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Check In</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Calendar onChange={(item: any) => setDate(item)} date={date} minDate={minDate} />
          <Button onClick={handleApply} w={"full"} _hover={{ background: "primary.600" }}>
            Apply
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalSingleDate;
