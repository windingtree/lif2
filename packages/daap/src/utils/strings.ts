// Makes shorter text with ellipsis in the center
export const centerEllipsis = (text: string, width = 4) =>
  text
    ? text.length > ((width * 2) + 3)
      ? `${text.substr(0, width + 2)}...${text.substr(-width, width)}`
      : text
    : '';

// Copies text to clipboard
export const copyToClipboard = (text: string) =>
  navigator
    .clipboard
    .writeText(text)
    .then(resolve => resolve);
