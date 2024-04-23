import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

function BottomAd() {
  useEffect(() => {
    if (window) {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || [])?.push({})
      } catch {
        // skip ad
      }
    }
  }, [])

  return (
    <Box>
      <Box
        id="bottom-ad-wrapper"
        maxW={['400px', '600px', '800px']}
        width="100%"
        height="100px !important"
        mt="35px"
        borderRadius="8px"
        overflow="hidden"
        zIndex="999"
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'inline-block', minWidth: '300px', width: '100%', height: '90px', borderRadius: '8px' }}
          data-ad-client="ca-pub-6018563398084009"
          data-ad-slot="9958820220"
        ></ins>
      </Box>
    </Box>
  )
}

export default BottomAd
