var userInput;
var userName;
userInput = "Max";
userInput = 5;
if (typeof userInput === "string") {
    userName = userInput;
    console.log("Hi i am here");
}
// The never Types
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occured!", 500);
console.log(result);
