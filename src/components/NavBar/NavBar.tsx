import { Flex } from '@chakra-ui/react'

interface NavBarProps {}

function NavBar(props: NavBarProps) {
  return (
    <>
      <Flex
        width="100%"
        bg="white"
        height="54px"
        justify="space-between"
        align="center"
        padding="16px 20px"
        borderBottom="1px solid"
        borderBottomColor="gray.10"
      >
        <Flex>-</Flex>
      </Flex>
    </>
  )
}

export default NavBar
