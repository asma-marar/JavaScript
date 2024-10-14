const form = document.getElementById("formIme");
const userName = document.getElementById("fname");
const passText = document.getElementById("lname");
const passCText = document.getElementById("wname");
const registerButton = document.getElementById("registerButton");
const spanRequired = document.querySelector(".required-message");
const spanRequired1 = document.querySelector(".required-message1");
const spanRequired2 = document.querySelector(".required-message2");
const correctMessage = document.getElementById("correct");

// Initially show required messages
spanRequired.style.display = "inline";
spanRequired1.style.display = "inline";
spanRequired2.style.display = "inline";

function validateInputs() {
    let isValid = true;

    // Clear previous error messages
    spanRequired1.textContent = "";
    spanRequired2.textContent = "";
    correctMessage.textContent = "";

    const trimmedUserName = userName.value.trim();
    const trimmedPassText = passText.value.trim();
    const trimmedPassCText = passCText.value.trim();

    if (trimmedUserName === "") {
        spanRequired.textContent = "Required";
        isValid = false;
    } else {
        spanRequired.textContent = ""; // Clear if valid
    }

    if (trimmedPassText === "") {
        spanRequired1.textContent = "Required";
        isValid = false;
    } else {
        spanRequired1.textContent = ""; // Clear if valid
    }

    if (trimmedPassCText === "") {
        spanRequired2.textContent = "Required";
        isValid = false;
    } else {
        spanRequired2.textContent = ""; // Clear if valid
    }

    if (trimmedPassText !== trimmedPassCText) {
        spanRequired1.textContent = "Passwords don't match";
        spanRequired2.textContent = "Passwords don't match";
        isValid = false;
    }

    registerButton.disabled = !isValid; // Enable button if valid
}

form.addEventListener("input", validateInputs);

form.onsubmit = function (e) {
    e.preventDefault();
    if (validateInputs()) {
        correctMessage.textContent = "Successfully registered!";
        correctMessage.style.color = "green";
        alert("Registration successful!");
    }
};
