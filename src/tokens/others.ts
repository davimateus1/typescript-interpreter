import { Token } from "../lexical/token";

export class NumberToken extends Token {
  constructor(value: string) {
    super("NUMBER", value);
  }
}

export class IdentifierToken extends Token {
  constructor(value: string) {
    super("IDENTIFIER", value);
  }
}

export class ReservedToken extends Token {
  constructor(value: string) {
    super("RESERVED", value);
  }
}

export class EOFToken extends Token {
  constructor() {
    super("EOF", "");
  }
}
