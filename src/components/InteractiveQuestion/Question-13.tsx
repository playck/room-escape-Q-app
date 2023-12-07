import { Center, Grid, GridItem } from '@chakra-ui/react'
import { Card } from '../Card'

interface QuestionsListProps {}

function QuestionsList(props: QuestionsListProps) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="20px">
      <GridItem aspectRatio="1 / 1.3" borderRadius="10px" cursor="pointer">
        <Center width="100%" height="100%">
          <Card frontImg="q-13-1.png" backImg="q-13-4.png" isUseFlip={true} />
        </Center>
      </GridItem>
      <GridItem aspectRatio="1 / 1.3" borderRadius="10px" cursor="pointer">
        <Center width="100%" height="100%">
          <Card frontImg="q-13-2.png" backImg="q-13-5.png" isUseFlip={true} />
        </Center>
      </GridItem>
      <GridItem aspectRatio="1 / 1.3" borderRadius="10px" cursor="pointer">
        <Center width="100%" height="100%">
          <Card frontImg="q-13-3.png" backImg="q-13-6.png" isUseFlip={true} />
        </Center>
      </GridItem>
    </Grid>
  )
}

export default QuestionsList
