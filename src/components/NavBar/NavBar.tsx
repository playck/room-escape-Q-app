import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FaAngleLeft } from 'react-icons/fa6'

interface NavBarProps {}

function NavBar(props: NavBarProps) {
  const router = useRouter()

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
        <Flex justifyContent="space-between" cursor="pointer" py="20px" pr="20px" onClick={() => router.back()}>
          <FaAngleLeft size={20} />
        </Flex>
      </Flex>
    </>
  )
}

export default NavBar
