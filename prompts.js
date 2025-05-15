let userPrompt = prompt("Choose a number");

console.log("userPrompt = " + userPrompt);
console.log("userPrompt type = " + typeof userPrompt);

// ================= CONVERTING USER PROMPTS TO NUMBER =================//
console.log(parseFloat(userPrompt));
console.log("parseFloat(userPrompt) type = " + typeof userPrompt); // string

console.log("floatPrompt type = " + typeof floatPrompt); // number

let intPrompt = parseInt(userPrompt);
console.log("intPrompt type = " + typeof intPrompt); // number

