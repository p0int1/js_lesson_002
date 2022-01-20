let login;
let message;
login = "";

login == "unknown"
  ? (message = "Hi")
  : login == "Owner"
  ? (message = "Hello")
  : login == ""
  ? (message = "unknown")
  : (message = "Tmp");

console.log(message);
