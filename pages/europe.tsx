
import { Img } from "@chakra-ui/image";
import { Flex, Heading, Box, Text, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import { Header } from "../src/components/Header";


const NumberBox = ({ number, text }) => {
  return <Box w="100px" textAlign="center">
    <Heading color="#FFBA08">{number}</Heading>
    <Text fontWeight="700">{text}</Text>
  </Box>
}

const Card = () => {
  return <Box w="280px" border='1px solid' borderColor="gray.300">
    <Box backgroundImage="https://source.unsplash.com/300x300/?london" backgroundSize="cover" h="200" />
    <Flex p="5" justifyContent="space-between">
      <Box>
        <Heading fontSize="md" mb="5">London</Heading>
        <Text>United Kingdom</Text>
      </Box>
      <Img
        alignSelf="center"
        borderRadius="full"
        boxSize="30px"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png" />
    </Flex>
  </Box>
}



const Europe = () => {
  return (
    <>
      <Header />
      <Flex backgroundImage="./europe.jpeg" minH="600px" backgroundSize="cover">
        <Heading color="white" alignSelf="flex-end" p="20" as="h1">Europe</Heading>
      </Flex>
      <Box>
        <Flex flexDirection={["column-reverse", "row"]} p={[10, 20]}>
          <Box w="100%">
            <Text fontSize="2xl">A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
          </Box>
          <Flex w="100%" height="100%" alignItems="center" justifyContent="space-evenly" m="auto" p={[0, 20]} pb={[10, 0]}>
            <NumberBox number={50} text={"countries"} />
            <NumberBox number={60} text={"languages"} />
            <NumberBox number={27} text={"cities"} />
          </Flex>
        </Flex>
        <Box p={[10, 20]}>
          <Heading color="brand.900" mb={20}>
            Cities +100
          </Heading>
          <SimpleGrid columns={1} spacing={10}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </SimpleGrid>

        </Box>
      </Box >
    </>
  )
}

export default Europe
