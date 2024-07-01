// Get the elements
const generateBtn = document.getElementById('generate-btn');
const resetBtn = document.getElementById('reset-btn');
const outputDiv = document.getElementById('output');
const numLettersInput = document.getElementById('num-letters');
const numDigits1Input = document.getElementById('num-digits-1');
const numDigits2Input = document.getElementById('num-digits-2');
const numStringsInput = document.getElementById('num-strings');

// Add event listeners
generateBtn.addEventListener('click', generateStrings);
resetBtn.addEventListener('click', resetForm);

// Function to generate strings
function generateStrings(event) {
  event.preventDefault(); // Prevent page reload

  const numLetters = numLettersInput.value;
  const numDigits1 = numDigits1Input.value;
  const numDigits2 = numDigits2Input.value;
  const numStrings = numStringsInput.value;

  // Your string generation logic goes here
  // For demonstration purposes, I'll just generate some random strings
  const strings = [];
  for (let i = 0; i < numStrings; i++) {
    const letters = getRandomLetters(numLetters);
    const digits1 = getRandomDigits(numDigits1);
    const digits2 = getRandomDigits(numDigits2);
    const string = `${letters}/${digits1}/${digits2}`;
    strings.push(string);
  }

  // Display the generated strings
  outputDiv.innerHTML = strings.join('<br>');
}

// Function to reset the form
function resetForm() {
  numLettersInput.value = 5;
  numDigits1Input.value = 5;
  numDigits2Input.value = 5;
  numStringsInput.value = 10;
  outputDiv.innerHTML = '';
}

// Helper functions to generate random letters and digits
function getRandomLetters(count) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < count; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return result;
}

function getRandomDigits(count) {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}