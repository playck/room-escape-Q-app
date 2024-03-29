import { extendTheme } from '@chakra-ui/react'

import { textStyles, layerStyles, breakpoints } from './common'
import { colors } from './colors'
import { fonts } from './fonts'

export const theme = extendTheme({
  colors,
  fonts,
  textStyles,
  layerStyles,
  breakpoints,
})
