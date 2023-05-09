import { Token } from "../lexical/token";

export class OpenBraceToken extends Token {
  constructor() {
    super("OPEN_BRACE", "{");
  }
}

export class CloseBraceToken extends Token {
  constructor() {
    super("CLOSE_BRACE", "}");
  }
}

export class OpenParenToken extends Token {
  constructor() {
    super("OPEN_PAREN", "(");
  }
}

export class CloseParenToken extends Token {
  constructor() {
    super("CLOSE_PAREN", ")");
  }
}

export class OpenBracketToken extends Token {
  constructor() {
    super("OPEN_BRACKET", "[");
  }
}

export class CloseBracketToken extends Token {
  constructor() {
    super("CLOSE_BRACKET", "]");
  }
}

export class SemicolonToken extends Token {
  constructor() {
    super("SEMICOLON", ";");
  }
}
