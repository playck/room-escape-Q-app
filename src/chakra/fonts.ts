const fonts = {
  body: "Spoqa Han Sans Neo, sans-serif",
  heading: "Spoqa Han Sans Neo, serif",
};

const getFontStyle = (size: number, weight: number, lineHight: string) => {
  return {
    fontSize: `${size}px`,
    fontWeight: weight,
    lineHight: lineHight,
  };
};

export { fonts, getFontStyle };
