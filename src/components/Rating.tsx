import { useEffect, useState } from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface IProps {
  readonly: boolean;
  rate: number;
}

const Rating = ({ readonly, rate }: IProps) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(rate);
  }, [rate]);

  const handleClick = (index: number) => {
    if (!readonly) {
      setRating(index + 1);
    }
  };

  return (
    <Flex>
      {[...Array(5)].map((_, index: number) => (
        <Icon
          key={index}
          as={FaStar}
          color={index < rating ? "orange.300" : "gray.200"}
          onClick={() => handleClick(index)}
          cursor={readonly ? "" : "pointer"}
          boxSize={4}
        />
      ))}
    </Flex>
  );
};

export default Rating;
