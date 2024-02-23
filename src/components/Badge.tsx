import { Badge, Box } from "@chakra-ui/react";
import React from "react";

interface IProps {
  label: string;
  color: string;
  colorText: string;
}

const BadgeCustom = ({ label, color, colorText }: IProps) => {
  return (
    <Box display="inline-flex" alignItems="center">
      <Badge colorScheme={color} borderRadius={10} px={3} color={colorText} textTransform="none">
        {label}
      </Badge>
    </Box>
  );
};

export default BadgeCustom;
