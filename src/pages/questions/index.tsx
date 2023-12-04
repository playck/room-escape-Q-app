import { questionList } from '@/lib/constant/questions'
import { Center, Grid, GridItem } from '@chakra-ui/react'
import Link from 'next/link'
import { IoMdLock, IoMdUnlock } from 'react-icons/io'

interface QuestionsListProps {}

function QuestionsList(props: QuestionsListProps) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} p="30px 20px">
      {questionList.map((el) => (
        <Link key={el.id} href={`questions/${el.id}`}>
          <GridItem
            key={el.id}
            display="flex"
            flex="1 1 0"
            justifyContent="center"
            alignItems="center"
            aspectRatio="1 / 1"
            bg="#FFF"
            borderRadius="10px"
            color="gray.700"
            cursor="pointer"
            boxShadow="0px 3px 5px rgba(0, 0, 0, 0.12)"
          >
            <Center>
              <IoMdLock size={30} />
            </Center>
          </GridItem>
        </Link>
      ))}
    </Grid>
  )
}

export default QuestionsList
