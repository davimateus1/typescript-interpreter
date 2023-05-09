import { Lexer } from "./lexical/lexer";

const lexer = new Lexer("if(a == 10) { b = 10 + 10 } else { b = a - 10 }");

let token = lexer.getNextToken();
while (token.type !== "EOF") {
  console.log(token);
  token = lexer.getNextToken();
}

console.log(token);
