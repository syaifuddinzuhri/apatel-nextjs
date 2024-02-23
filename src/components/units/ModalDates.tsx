import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import DateRangePickerWithCustomLabels from "./DateRangePickerWithCustomPriceLabels";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalDates = ({ isOpen, onClose }: IProps) => {
  const modalSize = useBreakpointValue({ base: "full", md: "3xl" });
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Booking Dates</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <DateRangePickerWithCustomLabels onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalDates;
