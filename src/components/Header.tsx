import { Flex, Img } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex as="header" w="100%" maxW="1480" mx="auto" justifyContent="center">
      <Img src="./logo.png" width="184" h={45.2} my="3" />
    </Flex>
  )
}


