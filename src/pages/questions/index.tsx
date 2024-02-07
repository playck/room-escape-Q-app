import { questionList } from '@/lib/constant/questions'
import { Center, Grid, GridItem, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useReadLocalStorage, useIsClient } from 'usehooks-ts'

interface QuestionsListProps {}

function QuestionsList(props: QuestionsListProps) {
  const solvedList = useReadLocalStorage<number[]>('solvedList')
  const isClient = useIsClient()

  if (!isClient) return <></>

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
            bg={solvedList?.includes(el.id) ? 'gray.300' : 'gray.100'}
            borderRadius="10px"
            color="gray.700"
            cursor="pointer"
            boxShadow="0px 3px 5px rgba(0, 0, 0, 0.12)"
          >
            <Center flexDirection="column" gap={['15px', '35px']}>
              {solvedList?.includes(el.id) ? (
                <Center width={['48px', '70px']}>
                  <Image src="/images/items/unlock.png" alt="열린 자물쇠" />
                </Center>
              ) : (
                <Center w={['48px', '70px']}>
                  <Image src="/images/items/lock.png" alt="자물쇠" />
                </Center>
              )}
              <Center fontSize={['24px', '42px']} fontWeight="500" lineHeight={['24px', '36px']}>
                {el.id}
              </Center>
            </Center>
          </GridItem>
        </Link>
      ))}
    </Grid>
  )
}

export default QuestionsList
