// Define variables
const generateButton = document.getElementById('generate-password');
const passwordDisplay = document.getElementById('password-display');

// Define password generator function
function generatePassword(length) {
	// Define character sets
	const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
	const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const numbers = '0123456789';
	const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

	// Combine character sets based on user input
	let combinedSet = lowerCase;
	if (document.getElementById('uppercase').checked) {
		combinedSet += upperCase;
	}
	if (document.getElementById('numbers').checked) {
		combinedSet += numbers;
	}
	if (document.getElementById('symbols').checked) {
		combinedSet += symbols;
	}

	// Generate password
	let password = '';
	for (let i = 0; i < length; i++) {
		password += combinedSet.charAt(Math.floor(Math.random() * combinedSet.length));
	}

	return password;
}

// Add event listener to button
generateButton.addEventListener('click', () => {
	const passwordLength = document.getElementById('passwordLength').value;
	if ( passwordLength >= 8 && passwordLength <= 32 ) {
        const password = generatePassword(passwordLength);
	    passwordDisplay.textContent = password;
        passwordDisplay.style.color = "#000";
    } else if (passwordLength > 32) {
        passwordDisplay.textContent = "Password Length Exceeded! Choose between 8 - 32";
        passwordDisplay.style.color = "red";
    } else {
        passwordDisplay.textContent = "Weak Password Length!";
        passwordDisplay.style.color = "red";
    }
});
