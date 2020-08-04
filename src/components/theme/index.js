const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#f1faee',
    heading: '#1d3557',
    text: '#1d3557',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#1000EE',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#1d3557',
    heading: '#f1faee',
    text: '#f1faee',
    preFormattedText: '#000',
    link: '#1ED3C6',
  },
};

export { lightTheme, darkTheme };
