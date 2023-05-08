import { Token } from "./token";

export class Lexer {
  input: string;
  position: number;

  constructor(input: string) {
    this.input = input;
    this.position = 0;
  }

  isDigit(char: string): boolean {
    return /\d/.test(char);
  }

  isLetter(char: string): boolean {
    return /[a-z]/i.test(char);
  }

  getNextToken(): Token {
    if (this.position >= this.input.length) {
      return new Token("EOF", "");
    }

    let char = this.input[this.position];

    if (this.isDigit(char)) {
      let value = "";
      while (this.isDigit(char)) {
        value += char;
        char = this.input[++this.position];
      }
      return new Token("NUMBER", value);
    }

    if (this.isLetter(char)) {
      let value = "";
      while (this.isLetter(char)) {
        value += char;
        char = this.input[++this.position];
      }
      return new Token("IDENTIFIER", value);
    }

    if (char === "+") {
      this.position++;
      return new Token("PLUS", "+");
    }

    if (char === `=`) {
      this.position++;
      return new Token("ASSIGN", "=");
    }

    if (char === "-") {
      this.position++;
      return new Token("MINUS", "-");
    }

    if (char === "*") {
      this.position++;
      return new Token("MULTIPLY", "*");
    }

    if (char === "/") {
      this.position++;
      return new Token("DIVIDE", "/");
    }

    throw new Error(`Invalid character: ${char}`);
  }
}
