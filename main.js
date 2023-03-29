// Define variables
const generateButton = document.getElementById('generate-password');
const passwordDisplay = document.getElementById('password-display');
const copyButton = document.getElementById('copy-password');
const myModal = new bootstrap.Modal(document.getElementById('copiedConfirmationModal'), {});
copyButton.disabled = true;

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

// Event listener for generate password button
generateButton.addEventListener('click', () => {
	const passwordLength = document.getElementById('passwordLength').value;
	if ( passwordLength >= 8 && passwordLength <= 32 ) {
        const password = generatePassword(passwordLength);
	    passwordDisplay.value = password;
        passwordDisplay.style.color = "#000";
		copyButton.disabled = false;
    } else if (passwordLength > 32) {
        passwordDisplay.value = "Password Length Exceeded! Choose between 8 - 32";
        passwordDisplay.style.color = "red";
    } else {
        passwordDisplay.value = "Weak Password Length!";
        passwordDisplay.style.color = "red";
    }
});

// Event listener for copy password button
copyButton.addEventListener('click', () => {
	navigator.clipboard.writeText(passwordDisplay.value);
	myModal.show();

	// Hide Modal after 2 seconds
	setTimeout(() => { 
		myModal.hide();
	}, 2000);
});