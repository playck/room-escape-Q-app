const fonts = {
  body: 'Spoqa Han Sans Neo, sans-serif',
  heading: 'Spoqa Han Sans Neo, serif',
}

const getFontStyle = (size: number, weight: number, lineHeight: string) => {
  return {
    fontSize: `${size}px`,
    fontWeight: weight,
    lineHeight: lineHeight,
  }
}

export { fonts, getFontStyle }
