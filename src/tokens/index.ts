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

export class PlusToken extends Token {
  constructor() {
    super("PLUS", "+");
  }
}

export class AssignToken extends Token {
  constructor() {
    super("ASSIGN", "=");
  }
}

export class MinusToken extends Token {
  constructor() {
    super("MINUS", "-");
  }
}

export class MultiplyToken extends Token {
  constructor() {
    super("MULTIPLY", "*");
  }
}

export class DivideToken extends Token {
  constructor() {
    super("DIVIDE", "/");
  }
}

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

export class EOFToken extends Token {
  constructor() {
    super("EOF", "");
  }
}

export class SemicolonToken extends Token {
  constructor() {
    super("SEMICOLON", ";");
  }
}

export class LessThanToken extends Token {
  constructor() {
    super("LESS_THAN", "<");
  }
}

export class GreaterThanToken extends Token {
  constructor() {
    super("GREATER_THAN", ">");
  }
}

export class LessThanOrEqualToken extends Token {
  constructor() {
    super("LESS_THAN_OR_EQUAL", "<=");
  }
}

export class GreaterThanOrEqualToken extends Token {
  constructor() {
    super("GREATER_THAN_OR_EQUAL", ">=");
  }
}

export class NotEqualToken extends Token {
  constructor() {
    super("NOT_EQUAL", "!=");
  }
}

export class DoubleAssignToken extends Token {
  constructor() {
    super("DOUBLE_ASSIGN", "==");
  }
}

export class NotToken extends Token {
  constructor() {
    super("NOT", "!");
  }
}
