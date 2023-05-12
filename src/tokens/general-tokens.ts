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

export class ConditionalToken extends Token {
  constructor(value: string) {
    super("CONDITIONAL_RESERVED", value);
  }
}

export class FluxControlToken extends Token {
  constructor(value: string) {
    super("FLUX_CONTROL_RESERVED", value);
  }
}

export class EOFToken extends Token {
  constructor() {
    super("EOF", "");
  }
}
