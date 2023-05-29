import { Lexer } from "./lexical/lexer";

// -------------------------TESTS-------------------------
const lexerUndeclaredVariable = new Lexer(
  "a = 0; const b = 10; const z = a + b;"
);
const lexerIf = new Lexer(
  "const a = 10; const b = 0; if (a == 10) { b = 10 + 10 }"
);
const lexerFor = new Lexer(
  "for (const i = 0; i < 10; i = i + 1) { const a = a + 1 }"
);
const lexerUnclosedError = new Lexer(
  "const a = 20; const b = 10; if (a == 10) { b = 10 + 10 } else { b = a - 10"
);

const lexerWhile = new Lexer("const a = 0; while (a < 10) { a = a + 1 }");
const lexerDoWhile = new Lexer("const a = 5; do { a = a + 1 } while (a < 10)");
const lexerThrow = new Lexer("try { const b = 10 / 2 } catch (e) { throw e }");
// -------------------------------------------------------

let token = lexerUnclosedError.getNextToken();

while (token.type !== "EOF") {
  console.log(token, "\n");
  token = lexerUnclosedError.getNextToken();
}

console.log(token);
console.log("----------------------------------------------------------------");
console.log(lexerUnclosedError.input);
