import { Box, Img, Flex, Divider, Heading } from "@chakra-ui/react";

import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { SwiperComp } from "../src/components/Swiper"

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />

      <Flex w="100%" justifyContent="center">
        <Img src="./travel-types.png" p="100" />
      </Flex>
      <Divider maxW="100" margin="auto" borderColor="black" mb="20" />

      <Box textAlign="center" >
        <Heading>Lets Go?</Heading>
        <Heading>Let's choose your continent</Heading>
      </Box>
      <SwiperComp />
    </Box>
  );
}
