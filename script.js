const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

const setMessage = (newMessage, color) => {
    message.textContent = newMessage;
    message.style.color = color;
    message.style.borderColor = color;
};

const setPasswordStyles = (color) => {
    password1El.style.borderColor = color;
    password2El.style.borderColor = color;
};

const validateForm = () => {
    // Using Containt API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        setMessage('Plase fill out all fields.', 'red');
        return;
    }
    // Check to see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        setPasswordStyles('green');
    } else {
        passwordsMatch = false;
        setMessage('Make sure passwords match', 'red');
        setPasswordStyles('red');
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        setMessage('Successfully Registered!', 'green');
    }
};

const storeFormData = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do somehing with the user data
    console.log(user);
};

const processFormData = (e) => {
    e.preventDefault();

    // Validate Form
    validateForm();
    // Submit Data if Valid
    if (isValid && passwordsMatch) storeFormData();
};

// Event Listener
form.addEventListener('submit', processFormData);
