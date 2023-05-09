export class LexerError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class UnclosedError extends LexerError {
  constructor(openingChar: string) {
    super(`Syntax error: unclosed ${openingChar}`);
  }
}

export class UnmatchedClosingError extends LexerError {
  constructor(closingChar: string) {
    super(`Syntax error: unmatched closing ${closingChar}`);
  }
}

export class InvalidCharacterError extends LexerError {
  constructor(char: string) {
    super(`Invalid character: ${char}`);
  }
}
