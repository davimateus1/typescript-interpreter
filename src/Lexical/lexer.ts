import { Token } from "./token";

import {
  InvalidCharacterError,
  UnclosedError,
  UndeclaredVariableError,
  UnmatchedClosingError,
} from "../errors";

import {
  FluxControl,
  NotAllowed,
  Conditionals,
  isDigit,
  isLetter,
  Operators,
} from "../utils";

import {
  EOFToken,
  FluxControlToken,
  IdentifierToken,
  NumberToken,
  ConditionalToken,
  ConstKeywordToken,
  ExceptionToken,
} from "../tokens/general-tokens";

import {
  CloseBraceToken,
  CloseBracketToken,
  CloseParenToken,
  OpenBraceToken,
  OpenBracketToken,
  OpenParenToken,
  SemicolonToken,
} from "../tokens/symbols";

import {
  AssignToken,
  DivideToken,
  DoubleAssignToken,
  GreaterThanOrEqualToken,
  GreaterThanToken,
  LessThanOrEqualToken,
  LessThanToken,
  MinusToken,
  MultiplyToken,
  NotEqualToken,
  NotToken,
  PlusToken,
} from "../tokens/operators";

export class Lexer {
  input: string;
  position: number;
  stack: string[];
  lastTokenType: string | null;
  whitespace: RegExp;
  identifiersArr: string[];

  constructor(input: string) {
    this.input = input;
    this.position = 0;
    this.stack = [];
    this.lastTokenType = null;
    this.whitespace = /\s/;
    this.identifiersArr = [];
  }

  getNextToken(): Token {
    if (this.position >= this.input.length) {
      if (this.stack.length > 0) {
        const lastOpeningChar = this.stack[this.stack.length - 1];
        throw new UnclosedError(lastOpeningChar);
      }

      if (this.lastTokenType && NotAllowed.includes(this.lastTokenType)) {
        throw new InvalidCharacterError(this.input[this.position - 1]);
      }

      return new EOFToken();
    }

    let char = this.input[this.position];

    if (this.whitespace.test(char)) {
      this.position++;
      return this.getNextToken();
    }

    if (isDigit(char)) {
      let value = "";
      while (isDigit(char)) {
        value += char;
        char = this.input[++this.position];
      }
      this.lastTokenType = "NUMBER";
      return new NumberToken(value);
    }

    if (isLetter(char)) {
      let value = "";
      while (isLetter(char)) {
        value += char;
        char = this.input[++this.position];
      }

      if (Conditionals.includes(value.toUpperCase())) {
        this.lastTokenType = "RESERVED";
        return new ConditionalToken(value);
      } else if (FluxControl.includes(value.toUpperCase())) {
        this.lastTokenType = "FLUX_CONTROL";
        return new FluxControlToken(value);
      } else if (value.toUpperCase() === "CONST") {
        this.lastTokenType = "CONST_KEYWORD";
        return new ConstKeywordToken();
      } else if (value.toLowerCase() === "e") {
        this.lastTokenType = "EXCEPTION";
        return new ExceptionToken(value);
      } else {
        if (
          this.lastTokenType !== "CONST_KEYWORD" &&
          !Operators.includes(this.lastTokenType || "") &&
          !this.identifiersArr.includes(value)
        ) {
          throw new UndeclaredVariableError(value);
        } else {
          this.lastTokenType = "IDENTIFIER";
          this.identifiersArr.push(value);

          return new IdentifierToken(value);
        }
      }
    }

    if (char === "{") {
      this.stack.push("{");
      this.position++;
      this.lastTokenType = "OPEN_BRACE";
      return new OpenBraceToken();
    }

    if (char === "}") {
      if (this.stack.pop() !== "{") {
        throw new UnmatchedClosingError("}");
      }
      this.position++;
      this.lastTokenType = "CLOSE_BRACE";
      return new CloseBraceToken();
    }

    if (char === "(") {
      this.stack.push("(");
      this.position++;
      this.lastTokenType = "OPEN_PAREN";
      return new OpenParenToken();
    }

    if (char === ")") {
      if (this.stack.pop() !== "(") {
        throw new UnmatchedClosingError(")");
      }
      this.position++;
      this.lastTokenType = "CLOSE_PAREN";
      return new CloseParenToken();
    }

    if (char === "[") {
      this.stack.push("[");
      this.position++;
      this.lastTokenType = "OPEN_BRACKET";
      return new OpenBracketToken();
    }

    if (char === "]") {
      if (this.stack.pop() !== "[") {
        throw new UnmatchedClosingError("]");
      }
      this.position++;
      this.lastTokenType = "CLOSE_BRACKET";
      return new CloseBracketToken();
    }

    if (char === ";") {
      this.position++;
      this.lastTokenType = "SEMICOLON";
      return new SemicolonToken();
    }

    if (char === "+") {
      this.position++;
      this.lastTokenType = "PLUS";
      return new PlusToken();
    }

    if (char === `=`) {
      if (this.input[this.position + 1] === "=") {
        this.position += 2;
        this.lastTokenType = "DOUBLE_ASSIGN";
        return new DoubleAssignToken();
      }

      this.position++;
      this.lastTokenType = "ASSIGN";
      return new AssignToken();
    }

    if (char === "-") {
      this.position++;
      this.lastTokenType = "MINUS";
      return new MinusToken();
    }

    if (char === "*") {
      this.position++;
      this.lastTokenType = "MULTIPLY";
      return new MultiplyToken();
    }

    if (char === "/") {
      this.position++;
      this.lastTokenType = "DIVIDE";
      return new DivideToken();
    }

    if (char === `>`) {
      if (this.input[this.position + 1] === "=") {
        this.position += 2;
        this.lastTokenType = "GREATER_THAN_OR_EQUAL";
        return new GreaterThanOrEqualToken();
      }

      this.position++;
      this.lastTokenType = "GREATER_THAN";
      return new GreaterThanToken();
    }

    if (char === "<") {
      if (this.input[this.position + 1] === "=") {
        this.position += 2;
        this.lastTokenType = "LESS_THAN_OR_EQUAL";
        return new LessThanOrEqualToken();
      }

      this.position++;
      this.lastTokenType = "LESS_THAN";
      return new LessThanToken();
    }

    if (char === `!`) {
      if (this.input[this.position + 1] === `=`) {
        this.position += 2;
        this.lastTokenType = "NOT_EQUAL";
        return new NotEqualToken();
      }

      this.position++;
      this.lastTokenType = "NOT";
      return new NotToken();
    }

    throw new InvalidCharacterError(char);
  }
}
