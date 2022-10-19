let userInput: unknown;
let userName: string;
userInput = "Max";
userInput = 5;
if (typeof userInput === "string") {
  userName = userInput;
  console.log("Hi i am here");
}
// The never Types
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("An error occured!", 500);
