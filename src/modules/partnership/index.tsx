import HeaderPage from "@/components/HeaderPage";
import { Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const PartnerShip = () => {
  const router = useRouter();
  const datas1 = [
    {
      title: "Consult with Our Friendly Team",
      image: "/svg/Consult_with_Our_Friendly_Team.svg",
    },
    {
      title: "Contract Signing",
      image: "/svg/Contract_Signing.svg",
    },
    {
      title: "Apatel Builds the Property Profile",
      image: "/svg/Apatel_Builds_the_Property_Profile.svg",
    },
    {
      title: "Apatel Maintain and Service the Property",
      image: "/svg/Apatel_Maintain_and_Service_the_Property.svg",
    },
    {
      title: "Monthly Payment and Report",
      image: "/svg/Monthly_Payment_and_Report.svg",
    },
  ];

  return (
    <>
      <HeaderPage title="We Make Partnership Easy and Profitable" />
      <Text align="center" my={8} fontSize={{ base: "sm", md: "lg" }}>
        Apatel offer partners a solution to manage their space and maximize their revenue in an easy and simple way.
        Apatel is an all in one solution providing a full property management services, from marketing, cleaning,
        renovation and furnishing, as well as guest communications
      </Text>
      <Flex gap={6} justify="space-around" flexWrap="wrap" flexDirection={{ base: "column", md: "row" }}>
        {datas1.map((item: any, i: number) => (
          <Box key={i} flexBasis={{ base: "50%", md: "15%" }}>
            <Flex flexDirection="column" alignItems="center" justifyContent="center">
              <Image src={item.image} boxSize="200px" />
              <Text align="center" fontSize="md" fontWeight="bold" color="primary.500">
                {item.title}
              </Text>
            </Flex>
          </Box>
        ))}
      </Flex>
      <Text align="center" my={8} fontSize={{ base: "sm", md: "lg" }}>
        Apatel offer partners a solution to manage their space and maximize their revenue in an easy and simple way.
        Apatel is an all in one solution providing a full property management services, from marketing, cleaning,
        renovation and furnishing, as well as guest communications
      </Text>
      <Flex gap={6} justify="center" flexWrap="wrap" flexDirection={{ base: "column", md: "row" }}>
        <Card onClick={() => router.push("/register")} cursor={"pointer"}>
          <CardBody>
            <Image src="/svg/sales_agent.svg" boxSize="200px" />
            <Text align="center" fontSize="md" fontWeight="bold" color="primary.500" mt={3}>
              Join as Sales Agent
            </Text>
          </CardBody>
        </Card>
        <Card onClick={() => router.push("/register")} cursor={"pointer"}>
          <CardBody>
            <Image src="/svg/unit_owner.svg" boxSize="200px" />
            <Text align="center" fontSize="md" fontWeight="bold" color="primary.500" mt={3}>
              Join as Unit Owner
            </Text>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default PartnerShip;
