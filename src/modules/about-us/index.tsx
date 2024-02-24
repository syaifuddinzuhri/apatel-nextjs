import { useGetSettingByParam } from "@/api/settings";
import HeaderPage from "@/components/HeaderPage";
import HeadingSection from "@/components/HeadingSection";
import MapEmbed from "@/components/MapEmbed";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  IconButton,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdCheckCircle, MdEmail, MdWhatsapp } from "react-icons/md";

const AboutUs = () => {
  const { data: address } = useGetSettingByParam("address");
  const { data: phone1 } = useGetSettingByParam("whatsapp_1");
  const { data: phone2 } = useGetSettingByParam("whatsapp_2");
  const { data: email } = useGetSettingByParam("email");

  const datas1 = [
    {
      title: "Efficient Sales and Marketing",
      image: "/svg/Efficient_Sales_and_Marketing.svg",
    },
    {
      title: "Trusted Services",
      image: "/svg/Trusted_Services.svg",
    },
    {
      title: "Maximised Revenue",
      image: "/svg/Maximised_Revenue.svg",
    },
    {
      title: "Improve Your Asset",
      image: "/svg/Improve_Your_Asset.svg",
    },
  ];

  const datas2 = [
    {
      title: "Quality Accomodation and Services",
      image: "/svg/Quality_Accomodation_and_Services.svg",
    },
    {
      title: "Easy Payment Processing",
      image: "/svg/Easy_Payment_Processing.svg",
    },
    {
      title: "Super Customer Support",
      image: "/svg/Superb_Customer_Support.svg",
    },
    {
      title: "Transparent and Fair Review",
      image: "/svg/Transparent_and_Fair_Review.svg",
    },
  ];

  const chatWa = (phone: string) => {
    const whatsappUrl = `https://wa.me/${phone}`;
    window.location.href = whatsappUrl;
  };

  const handleRedirectToMail = () => {
    const subject = "Customer Apatel Indonesia";
    const mailtoUrl = `mailto:${email?.data.value || "apatelindo@gmail.com"}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <>
      <HeaderPage title="We are Always Here to Help Out in Whatever Way We Can Feel Free to Say Hello!" />
      <Text align="center" my={8} fontSize={{ base: "sm", md: "lg" }}>
        Apatel is a startup company that offers short to medium quality accommodation. Apatel uses technology to empower
        property partners to make money and better maximize their space. Apatel offers a variety of needs, from
        apartments and villas for holidays to offices for business. With a solid team from diverse backgrounds, Apatel
        aims to play a leading role in the property rental business offering partners ways to make better use of their
        space.
      </Text>
      <Flex gap={6} justify="space-around" flexWrap="wrap" flexDirection={{ base: "column", md: "row" }}>
        {datas1.map((item: any, i: number) => (
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
      <Text align="center" my={8} fontSize={{ base: "sm", md: "lg" }}>
        Apatel offer partners a solution to manage their space and maximize their revenue in an easy and simple way.
        Apatel is an all in one solution providing a full property management services, from marketing, cleaning,
        renovation and furnishing, as well as guest communications
      </Text>
      <Flex gap={6} justify="space-around" flexWrap="wrap" flexDirection={{ base: "column", md: "row" }}>
        {datas2.map((item: any, i: number) => (
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
      <Text align="center" my={8} fontSize={{ base: "sm", md: "lg" }}>
        Apatel offers an outstanding guest experiences and services. A simple booking, check in and check out processes.
        Our team will always be available to help with all querries and complaints
      </Text>
      <Flex gap={6} justify="center" flexWrap="wrap" flexDirection={{ base: "column", md: "row" }}>
        <Card flexBasis={{ base: "100%", md: "45%" }}>
          <CardBody>
            <HeadingSection title="Our Office Location" />
            <Text fontSize={{ base: "sm", md: "md" }} align="center">
              {address?.data.value || ""}
            </Text>
          </CardBody>
        </Card>
        <Card flexBasis={{ base: "100%", md: "45%" }}>
          <CardBody>
            <HeadingSection title="Chat with Us" />
            <Flex gap={5} flexWrap={"wrap"}>
              <Flex gap={3} alignItems={"center"}>
                <IconButton
                  onClick={() => chatWa(phone1?.data.value || "")}
                  aria-label="Search database"
                  icon={<MdWhatsapp />}
                  size="xl"
                  p={1}
                  colorScheme="green"
                />
                <Text>Customer Service 1</Text>
              </Flex>
              <Flex gap={3} alignItems={"center"}>
                <IconButton
                  onClick={() => chatWa(phone2?.data.value || "")}
                  aria-label="Search database"
                  icon={<MdWhatsapp />}
                  size="xl"
                  p={1}
                  colorScheme="green"
                />
                <Text>Customer Service 2</Text>
              </Flex>
              <Flex gap={3} alignItems={"center"}>
                <IconButton
                  onClick={handleRedirectToMail}
                  aria-label="Search database"
                  icon={<MdEmail />}
                  size="xl"
                  p={1}
                  colorScheme="primary"
                />
                <Text> {email?.data.value || ""}</Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
      <Box mt={8} borderRadius={16} overflow={"hidden"}>
        <MapEmbed lat="-6.2063038" lng="106.7332478" />
      </Box>
    </>
  );
};

export default AboutUs;
