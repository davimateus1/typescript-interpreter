export function isDigit(char: string): boolean {
  return /\d/.test(char);
}

export function isLetter(char: string): boolean {
  return /[a-z]/i.test(char);
}

export const NotAllowed = [
  "PLUS",
  "MINUS",
  "MULTIPLY",
  "DIVIDE",
  "ASSIGN",
  "LESS_THAN",
  "GREATER_THAN",
  "LESS_THAN_OR_EQUAL",
  "GREATER_THAN_OR_EQUAL",
  "DOUBLE_ASSIGN",
  "NOT_EQUAL",
  "EQUAL",
  "OPEN_PAREN",
  "OPEN_BRACE",
  "OPEN_BRACKET",
];
