import { Token } from "../lexical/token";

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
