import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Rating from "../Rating";
import { formatRupiah } from "@/utils/formatter";
import BadgeCustom from "../Badge";

interface IProps {
  data: any;
}

const CardUnit = ({ data }: IProps) => {
  const price =
    data?.price_list[0].discount_price !== 0 ? data?.price_list[0].discount_price : data?.price_list[0].original_price;
  return (
    <Card>
      <CardBody>
        <Image
          src={data?.unit_file_thumbnail[0].file_url || ""}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          objectFit="cover"
          w="100%"
          h={{ base: "200px", md: "200px", lg: "240px" }}
        />
        <Stack mt="6" spacing="3">
          <Box h="80px" mb={2}>
            <Heading size="md" color="primary.500" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
              {data?.name} {data?.name}
            </Heading>
            <Text fontSize="xs" mt={2} className="clamp-3-lines">
              {data?.address}
            </Text>
          </Box>
          <Divider />
          <Rating readonly={true} rate={data?.rating} />
          <Text color="primary.800" fontWeight="bold" fontSize="lg">
            {formatRupiah(price)}/night
          </Text>
          {data?.is_booked && <BadgeCustom label="This unit is not available" color="secondary" colorText="white" />}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardUnit;
