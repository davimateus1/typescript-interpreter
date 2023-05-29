export const isDigit = (char: string): boolean => {
  return /\d/.test(char);
};

export const isLetter = (char: string): boolean => {
  return /[a-z]/i.test(char);
};

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

export const Conditionals = [
  "DO",
  "IF",
  "ELSE",
  "ELSE IF",
  "WHILE",
  "FOR",
  "RETURN",
];

export const Operators = [
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
];

export const FluxControl = ["TRY", "CATCH", "THROW"];
