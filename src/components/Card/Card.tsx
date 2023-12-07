import { Box, Flex, Image } from '@chakra-ui/react'
import { useState } from 'react'

interface CardProps {
  frontImg?: string
  backImg?: string
  isUseFlip: boolean
}

function Card(props: CardProps) {
  const [isFlipped, setFlipped] = useState(false)
  const { frontImg, backImg, isUseFlip } = props

  const onFlipCard = () => {
    setFlipped(!isFlipped)
  }

  return (
    <Box
      className="flip-card"
      sx={{
        aspectRatio: ' 1 / 2',
        width: '100%',
        height: '100%',
        position: 'relative',
        maxWidth: '200px',
        perspective: '500px',
        borderRadius: '6px',
        overflow: 'hidden',
        '.card': {
          backgroundColor: '#FFF',
          transform: `${isFlipped === true ? 'rotateY(180deg)' : 'rotateY(0deg)'} `,
        },
      }}
      onClick={() => onFlipCard()}
    >
      <Box
        className="card"
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transition: '.5s',
          transformStyle: 'preserve-3d',
          img: {
            width: '100%',
            objectFit: 'cover',
          },
        }}
      >
        <Flex
          className="card-front"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFF',
            background: '#FFF',
            boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
          }}
        >
          <Image src={`/images/questions/${frontImg}`} alt="" />
        </Flex>
        <Flex
          className="card-back"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFF',
            background: '#FFF',
            boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            transform: 'rotateY(180deg)',
          }}
        >
          <Image src={`/images/questions/${backImg}`} alt="" />
        </Flex>
      </Box>
    </Box>
  )
}

export default Card
