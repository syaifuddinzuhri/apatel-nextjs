import BookingStep from "@/components/home/BookingStep";
import CarouselBanner from "@/components/home/carousel";
import CardUnitSearch from "@/components/units/CardUnitSearch";
import UnitTopSection from "@/components/units/UnitTopSection";
import React, { useEffect } from "react";

const Home = () => {
  return (
    <>
      <CarouselBanner />
      <CardUnitSearch />
      <UnitTopSection />
      <BookingStep />
    </>
  );
};

export default Home;
