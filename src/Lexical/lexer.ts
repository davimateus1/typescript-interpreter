import { Token } from "./token";

import {
  OpenBraceToken,
  CloseBraceToken,
  OpenParenToken,
  CloseParenToken,
  OpenBracketToken,
  CloseBracketToken,
  PlusToken,
  AssignToken,
  MinusToken,
  MultiplyToken,
  DivideToken,
  NumberToken,
  IdentifierToken,
  EOFToken,
} from "../tokens";

import {
  InvalidCharacterError,
  UnclosedError,
  UnmatchedClosingError,
} from "../errors";

export class Lexer {
  input: string;
  position: number;
  stack: string[];

  constructor(input: string) {
    this.input = input;
    this.position = 0;
    this.stack = [];
  }

  isDigit(char: string): boolean {
    return /\d/.test(char);
  }

  isLetter(char: string): boolean {
    return /[a-z]/i.test(char);
  }

  getNextToken(): Token {
    if (this.position >= this.input.length) {
      if (this.stack.length > 0) {
        const lastOpeningChar = this.stack[this.stack.length - 1];
        throw new UnclosedError(lastOpeningChar);
      }
      return new EOFToken();
    }

    let char = this.input[this.position];

    if (this.isDigit(char)) {
      let value = "";
      while (this.isDigit(char)) {
        value += char;
        char = this.input[++this.position];
      }
      return new NumberToken(value);
    }

    if (this.isLetter(char)) {
      let value = "";
      while (this.isLetter(char)) {
        value += char;
        char = this.input[++this.position];
      }
      return new IdentifierToken(value);
    }

    if (char === "{") {
      this.stack.push("{");
      this.position++;
      return new OpenBraceToken();
    }

    if (char === "}") {
      if (this.stack.pop() !== "{") {
        throw new UnmatchedClosingError("}");
      }
      this.position++;
      return new CloseBraceToken();
    }

    if (char === "(") {
      this.stack.push("(");
      this.position++;
      return new OpenParenToken();
    }

    if (char === ")") {
      if (this.stack.pop() !== "(") {
        throw new UnmatchedClosingError(")");
      }
      this.position++;
      return new CloseParenToken();
    }

    if (char === "[") {
      this.stack.push("[");
      this.position++;
      return new OpenBracketToken();
    }

    if (char === "]") {
      if (this.stack.pop() !== "[") {
        throw new UnmatchedClosingError("]");
      }
      this.position++;
      return new CloseBracketToken();
    }

    if (char === "+") {
      this.position++;
      return new PlusToken();
    }

    if (char === `=`) {
      this.position++;
      return new AssignToken();
    }

    if (char === "-") {
      this.position++;
      return new MinusToken();
    }

    if (char === "*") {
      this.position++;
      return new MultiplyToken();
    }

    if (char === "/") {
      this.position++;
      return new DivideToken();
    }

    throw new InvalidCharacterError(char);
  }
}
