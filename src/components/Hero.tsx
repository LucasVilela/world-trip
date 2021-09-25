import { Flex, Img, Stack, Heading } from '@chakra-ui/react'


export const Hero = () => {
  return (
    <Flex backgroundImage="/hero.jpeg" h="400px" justifyContent="center" backgroundPosition="20px 50px">
      <Flex maxW={1480} w="100%" alignItems="center" justifyContent="space-evenly">
        <Stack spacing={10}>
          <Stack spacing={4}>
            <Heading color="brand.150">5 Continents,</Heading>
            <Heading color="brand.150">infinity possibilities.</Heading>
          </Stack>
          <Heading size="small" fontWeight="400" color="brand.200">Time to do that travel that you always dreamed of.</Heading>
        </Stack>
        <Img src="./Airplane.png" mt="150" style={{ transform: "rotate(3deg)" }} />
      </Flex>
    </Flex>
  )
}


