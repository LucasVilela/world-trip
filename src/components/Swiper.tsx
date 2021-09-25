import { Box, Heading, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

export const SwiperComp = () => {
  return (
    <Box mx={[5, 20]} my={[0, 20]} justifyContent="center">
      <Swiper pagination={true} navigation={true}>
        <SwiperSlide>
          <Flex
            backgroundImage="https://source.unsplash.com/1600x900/?europe"
            w="1240"
            h="450"
            p={10}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Heading color="brand.150" fontWeight="bold">
              Europe
            </Heading>
            <Heading color="brand.150" as="h3" fontSize="medium" fontWeight="700" mt={30}>
              The old continent{" "}
            </Heading>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Box backgroundImage="https://source.unsplash.com/1500x900" w="1240" h="450" />
        </SwiperSlide>
        <SwiperSlide>
          <Box backgroundImage="https://source.unsplash.com/900x900" w="1240" h="450" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
