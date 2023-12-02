import { Center, Grid, GridItem } from '@chakra-ui/react'
import Link from 'next/link'
interface QuestionsListProps {}

function QuestionsList(props: QuestionsListProps) {
  const arr = [1, 2, 3, 4, 5]

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} p="30px 20px">
      {arr.map((el) => (
        <Link key={el} href={`questions/${el}`}>
          <GridItem
            key={el}
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
            <Center>{el}</Center>
          </GridItem>
        </Link>
      ))}
    </Grid>
  )
}

export default QuestionsList
