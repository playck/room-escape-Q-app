import { Flex, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FaAngleLeft } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { SideDrawer } from '../Drawer'

interface NavBarProps {}

function NavBar(props: NavBarProps) {
  const router = useRouter()
  const { pathname } = router
  const { id } = router.query
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      position="fixed"
      top="0"
      left="50%"
      transform="translateX(-50%)"
      maxW="650px"
      width="100%"
      bg={pathname === '/' ? 'transparent' : 'white'}
      height="54px"
      justify="space-between"
      align="center"
      p="16px 0px"
      borderBottom="1px solid"
      borderBottomColor={router.query?.id ? 'gray.10' : 'transparent'}
    >
      {pathname !== '/' ? (
        <Flex
          justifyContent="space-between"
          py="20px"
          px="20px"
          cursor="pointer"
          onClick={() => (id ? router.push('/questions') : router.push('/'))}
        >
          <FaAngleLeft size={20} />
        </Flex>
      ) : (
        <></>
      )}
      {pathname !== '/' ? (
        <Flex py="20px" px="20px" cursor="pointer" onClick={() => onOpen()}>
          <GiHamburgerMenu size={22} />
        </Flex>
      ) : (
        <></>
      )}

      <SideDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default NavBar
