import { Lexer } from "./lexical/lexer";

const lexer = new Lexer("x=(1+2)");

let token = lexer.getNextToken();
while (token.type !== "EOF") {
  console.log(token);
  token = lexer.getNextToken();
}

console.log(token);
