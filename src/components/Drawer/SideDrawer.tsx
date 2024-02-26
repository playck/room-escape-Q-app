import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Text,
  Divider,
  Button,
} from '@chakra-ui/react'
import { getFontStyle } from '@/chakra/fonts'
import { IoClose } from 'react-icons/io5'
import { questionList } from '@/lib/constant/questions'
import { useLocalStorage } from 'usehooks-ts'
import { useEffect, useState } from 'react'

interface SideDrawerProps {
  isOpen: boolean
  onClose: () => void
}

function SideDrawer({ isOpen, onClose }: SideDrawerProps): JSX.Element {
  const [solvedList, setSolvedList] = useLocalStorage<number[]>('solvedList', [])
  const [usedHintList, setUsedHintList] = useLocalStorage<number[]>('useHintList', [])
  const [level, setLevel] = useState<number>(0)
  const [levelTitle, setLevelTitle] = useState<string>('')

  const levelList = ['방세포', '방유아', '방청년', '방천재']

  useEffect(() => {
    const len = solvedList?.length
    if (len <= 10) {
      setLevelTitle(levelList[0])
      setLevel(0)
    } else if (10 < len && len <= 20) {
      setLevelTitle(levelList[1])
      setLevel(1)
    } else if (20 < len && len <= 30) {
      setLevelTitle(levelList[2])
      setLevel(2)
    } else if (30 < len && len <= 40) {
      setLevelTitle(levelList[3])
      setLevel(3)
    }
  }, [solvedList])

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader pl="16px" pr="0">
            <Flex justifyContent="space-between" align="center">
              <Flex gap="10px" align="center">
                <Text {...getFontStyle(20, 700, '20px')}>Lv.{level}</Text>
                <Text>{levelTitle}</Text>
              </Flex>
              <Flex pl="10px" pr="12px" onClick={() => onClose()}>
                <IoClose size={30} />
              </Flex>
            </Flex>
          </DrawerHeader>
          <Divider />
          <DrawerBody p="0">
            <Flex p="16px" gap="20px" bg="gray.50" {...getFontStyle(16, 500, '20px')}>
              <Flex gap="8px">
                <Text>푼 문제</Text>
                <Text>
                  {solvedList?.length} / {questionList.length}
                </Text>
              </Flex>
              <Flex gap="8px">
                <Text>힌트 사용 문제</Text>
                <Text>
                  {usedHintList?.length} / {questionList.length}
                </Text>
              </Flex>
            </Flex>
          </DrawerBody>
          <DrawerFooter p="16px">
            <Button height="48px" onClick={() => onClose()}>
              닫기
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideDrawer
