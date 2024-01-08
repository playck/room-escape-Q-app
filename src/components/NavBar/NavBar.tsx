import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FaAngleLeft } from 'react-icons/fa6'

interface NavBarProps {}

function NavBar(props: NavBarProps) {
  const router = useRouter()
  const { pathname } = router
  const { id } = router.query

  return (
    <Flex
      position="fixed"
      top="0"
      left="50%"
      transform="translateX(-50%)"
      maxW="800px"
      width="100%"
      bg={pathname === '/' ? 'transparent' : 'white'}
      height="54px"
      justify="space-between"
      align="center"
      padding="16px 20px"
      borderBottom="1px solid"
      borderBottomColor={router.query?.id ? 'gray.10' : 'transparent'}
    >
      {pathname !== '/' ? (
        <Flex
          justifyContent="space-between"
          cursor="pointer"
          py="20px"
          pr="20px"
          onClick={() => (id ? router.push('/questions') : router.push('/'))}
        >
          <FaAngleLeft size={20} />
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  )
}

export default NavBar
