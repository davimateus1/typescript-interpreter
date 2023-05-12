import { Lexer } from "./lexical/lexer";

const lexerIf = new Lexer("if(a == 10) { b = 10 + 10 } else { b = a - 10 }");
// const lexerFor = new Lexer("for (i = 0; i < 10; i = i + 1) { a = a + 1 }");
// const lexerWhile = new Lexer("while (a < 10) { a = a + 1 }");
// const lexerDoWhile = new Lexer("do { a = a + 1 } while (a < 10)");
// const lexerThrow = new Lexer("try { b = 10 / 2 } catch (e) { throw e }");
// const lexerError = new Lexer("if (a == 10) { b = 10 + 10 } else { b = a - 10");

let token = lexerIf.getNextToken();

while (token.type !== "EOF") {
  console.log(token, "\n");
  token = lexerIf.getNextToken();
}

console.log(token);
console.log("----------------------------------------------------------------");
console.log(lexerIf.input);
