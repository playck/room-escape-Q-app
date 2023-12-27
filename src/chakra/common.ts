const layerStyles = {
  lineClamp1: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
  },
  lineClamp2: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    whiteSpace: 'pre-wrap',
  },
  lineClamp3: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    whiteSpace: 'pre-wrap',
  },
}

const textStyles = {}

const breakpoints = {
  mobile: '320px',
  tablet: '820px',
  pc: '1200px',
}

export { layerStyles, textStyles, breakpoints }
