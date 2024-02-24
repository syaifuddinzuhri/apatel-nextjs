import { Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import HeadingSection from "../HeadingSection";

const BookingStep = () => {
  const datas = [
    {
      title: "Request Booking Via Website",
      image: "/svg/Request_Booking_Via_Website.svg",
    },
    {
      title: "Online Payment Gateway",
      image: "/svg/Online_Payment_Gateway.svg",
    },
    {
      title: "Booking Approval",
      image: "/svg/Booking_Approval.svg",
    },
    {
      title: "Guest Check In, Stay, and Check Out",
      image: "/svg/Guest_Check In_Stay_and_Check Out.svg",
    },
  ];
  return (
    <Card mt={8}>
      <CardBody>
        <HeadingSection title="Stay Easily With Apatel" />
        <Flex gap={6} justify="space-around" flexWrap="wrap" flexDirection={{ base: "column", md: "row" }}>
          {datas.map((item: any, i: number) => (
            <Box key={i} flexBasis={{ base: "50%", md: "20%" }}>
              <Flex flexDirection="column" alignItems="center" justifyContent="center">
                <Image src={item.image} boxSize="200px" />
                <Text align="center" fontSize="md" fontWeight="bold" color="primary.500">
                  {item.title}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BookingStep;
