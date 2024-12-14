function userInput(user_input) {

  const sanitized_input = DOMPurify.sanitize(user_input);
  document.getElementById("output").innerHTML = sanitizedInput;
  
  
  console.log("try xss");
}