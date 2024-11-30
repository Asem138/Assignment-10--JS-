var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

var usersData = JSON.parse(localStorage.getItem('allUsers')) || [];

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordRegex = /^.{6,}$/;

function addUser() {
    var nameInput = document.getElementById('nameInput');

    if (!nameInput.value || !emailInput.value || !passwordInput.value) {
        alert("Please fill all fields!");
        return;
    }

    if (!emailRegex.test(emailInput.value.trim())) {
        alert("Please enter a valid email address!");
        return;
    }

    if (!passwordRegex.test(passwordInput.value.trim())) {
        alert("Password must be at least 6 characters long!");
        return;
    }

    var user = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim().toLowerCase(),
        password: passwordInput.value.trim(),
    };

    if (usersData.find(u => u.email === user.email)) {
        alert("This email is already registered!");
        return;
    }

    usersData.push(user);
    localStorage.setItem('allUsers', JSON.stringify(usersData));

    clearInputs();
    alert("Account created successfully! You can now log in.");
}

function clearInputs() {
    var nameInput = document.getElementById('nameInput');
    if (nameInput) nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}

function signIn() {
    if (!emailInput.value || !passwordInput.value) {
        alert("Please fill both email and password!");
        return;
    }

    var email = emailInput.value.trim().toLowerCase();
    var password = passwordInput.value.trim();

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    var user = usersData.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));

        alert(`Welcome back, ${user.name}!`);
        window.location.href = "hello.html";
    } else {
        alert("Invalid email or password. Please try again!");
    }
}
