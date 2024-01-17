import { getFontStyle } from '@/chakra/fonts'
import { questionList } from '@/lib/constant/questions'
import { Center, Grid, GridItem, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface QuestionsListProps {}

function QuestionsList(props: QuestionsListProps) {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={6}
      p="30px 20px"
      sx={{
        backgroundColor: 'hsl(0,0%,18%);',
        WebkitBackgroundSize: '2.5px 2.5px',
        backgroundImage:
          '-webkit-linear-gradient( 0deg, hsla(0,0%,0%,0) 0, hsla(0,0%,10%,1) 3px), -webkit-linear-gradient( 90deg, hsla(0,0%,0%,0) 0, hsla(0,0%,10%,1) 5px)',
      }}
    >
      {questionList.map((el) => (
        <Link key={el.id} href={`questions/${el.id}`}>
          <GridItem
            key={el.id}
            display="flex"
            flex="1 1 0"
            justifyContent="center"
            alignItems="center"
            aspectRatio="1 / 1.3"
            bg="#e9ecef"
            borderRadius="10px"
            color="gray.700"
            cursor="pointer"
            boxShadow="0px 3px 5px rgba(0, 0, 0, 0.12)"
          >
            <Center flexDirection="column" gap="10px">
              <Text fontSize="40px">🔒</Text>
              <Center {...getFontStyle(24, 500, '24px')}>{el.id}</Center>
            </Center>
          </GridItem>
        </Link>
      ))}
    </Grid>
  )
}

export default QuestionsList
