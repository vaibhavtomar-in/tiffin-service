let name = document.getElementById("name");
let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let rePassword = document.getElementById("re-password");
let birthday = document.getElementById("birthday");        
let loginButton = document.getElementById("login");      
let signinButton = document.getElementById("signin");       
const nameRegex = /^[a-zA-Z\s'-]+$/;
const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
const usernameRegex = /^[a-zA-Z0-9.-_]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
var birthdayRegex = /^\d{4}-(\d{2}|\d{1})-(\d{2}|\d{1})$/;
// console.log(name.previousElementSibling.innerText);
name.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
username.addEventListener('input', validateUsername);
password.addEventListener('input', validatePassword);
rePassword.addEventListener('input', validateRepassword);
birthday.addEventListener('input', validateBirthday);
loginButton.addEventListener('click', checkLabelsBeforeSubmit);
signinButton.addEventListener('click', checkLabelsBeforeSubmit);
function validateName(){
    if (nameRegex.test(name.value)){
        name.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-check\"></i>";
        name.previousElementSibling.style.color = "green";
        name.previousElementSibling.previousElementSibling.style.color = "green";
        name.setAttribute("class", "form-control border border-success border-2");
    }
    else{
        name.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-xmark\"></i> invalid name";
        name.previousElementSibling.style.color = "red";
        name.previousElementSibling.previousElementSibling.style.color = "red";
        name.setAttribute("class", "form-control border border-warning border-2");
    }
}
function validateEmail(){
    if (emailRegex.test(email.value)){
        email.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-check\"></i>";
        email.previousElementSibling.style.color = "green";
        email.previousElementSibling.previousElementSibling.style.color = "green";
        email.setAttribute("class", "form-control border border-success border-2");
    }
    else{
        email.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-xmark\"></i> invalid email";
        email.previousElementSibling.style.color = "red";
        email.previousElementSibling.previousElementSibling.style.color = "red";
        email.setAttribute("class", "form-control border border-warning border-2");
    }
}
function validateUsername(){
    if (usernameRegex.test(username.value)){
        username.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-check\"></i>";
        username.previousElementSibling.style.color = "green";
        username.previousElementSibling.previousElementSibling.style.color = "green";
        username.setAttribute("class", "form-control border border-success border-2");
    }
    else{
        username.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-xmark\"></i> invalid username";
        username.previousElementSibling.style.color = "red";
        username.previousElementSibling.previousElementSibling.style.color = "red";
        username.setAttribute("class", "form-control border border-warning border-2");
    }
}
function validatePassword(){
    if (passwordRegex.test(password.value) ){
        password.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-check\"></i>";
        password.previousElementSibling.style.color = "green";
        password.previousElementSibling.previousElementSibling.style.color = "green";
        password.setAttribute("class", "form-control border border-success border-2");
    }
    else{
        password.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-xmark\"></i> weak password";
        password.previousElementSibling.style.color = "red";
        password.previousElementSibling.previousElementSibling.style.color = "red";
        password.setAttribute("class", "form-control border border-warning border-2");
    }
}
function validateRepassword(){
    if (rePassword.value.match(password.value)){
        rePassword.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-check\"></i>";
        rePassword.previousElementSibling.style.color = "green";
        rePassword.previousElementSibling.previousElementSibling.style.color = "green";
        rePassword.setAttribute("class", "form-control border border-success border-2");
    }
    else{
        rePassword.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-xmark\"></i> password doesn't match";
        rePassword.previousElementSibling.style.color = "red";
        rePassword.previousElementSibling.previousElementSibling.style.color = "red";
        rePassword.setAttribute("class", "form-control border border-warning border-2");
    }
}
function checkLabelsBeforeSubmit(event) {
    // Select all the labels with the class 'col-form-label'
    let labels = document.querySelectorAll(".col-form-label");

    // Iterate through each label
    for (let label of labels) {
        // Check if the label or its associated icon span is not green
        let iconSpan = label.nextElementSibling;
        if (label.style.color !== "green" || (iconSpan && iconSpan.style.color !== "green")) {
            event.preventDefault();
            alert("Please enter valid values in the form correctly to proceed.");
            return;
        }
    }
}



function validateBirthday() {
    // var birthday = document.getElementById("birthday").value; // Assuming the input element has an id="birthday"
    // var birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;

    // Validate format using regex
    if (!birthdayRegex.test(birthday.value)) {
        birthday.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-xmark\"></i> Invalid date format";
        birthday.previousElementSibling.style.color = "red";
        birthday.previousElementSibling.previousElementSibling.style.color = "red";
        birthday.setAttribute("class", "form-control border border-warning border-2");
    } else {
        var date = birthday.value.split("-");
        var year = parseInt(date[0]);
        var month = parseInt(date[1]) - 1; // JavaScript months are 0-indexed
        var day = parseInt(date[2]);
        
        var birthDate = new Date(year, month, day);

        // Check if the constructed date is valid
        if (birthDate.getFullYear() !== year || birthDate.getMonth() !== month || birthDate.getDate() !== day) {
            birthday.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-xmark\"></i> Invalid date";
            birthday.previousElementSibling.style.color = "red";
            birthday.previousElementSibling.previousElementSibling.style.color = "red";
            birthday.setAttribute("class", "form-control border border-warning border-2");
            console.log(birthDate.getFullYear());
            console.log(birthDate.getMonth());
            console.log(birthDate.getDate());
        } 
        // Check if age is more than 18 years
        else {
            var today = new Date();
            var age = today.getFullYear() - birthDate.getFullYear();
            var monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age < 18) {
                birthday.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-xmark\"></i> Age less than 18";
                birthday.previousElementSibling.style.color = "red";
                birthday.previousElementSibling.previousElementSibling.style.color = "red";
                birthday.setAttribute("class", "form-control border border-warning border-2");
                // loginButton.style.background = "grey";
                loginButton.setAttribute('disabled', true);
                loginButton.style.background="grey";
                loginButton.children[0].removeAttribute("href")
                signinButton.setAttribute('disabled', true);
                signinButton.style.background="grey";
                signinButton.children[0].removeAttribute("href")
            } else {
                // If valid, clear any previous error messages
                birthday.previousElementSibling.innerHTML = "<i class=\"fa-solid fa-check\"></i>";
                birthday.previousElementSibling.style.color = "green";
                birthday.previousElementSibling.previousElementSibling.style.color = "green";
                birthday.setAttribute("class", "form-control border border-success border-2");
                loginButton.setAttribute('disabled', false);
                loginButton.style.background="#fc4c4c";
                loginButton.children[0].setAttribute("href", "home.html")
                signinButton.setAttribute('disabled', false);
                signinButton.style.background="#fc4c4c";
                signinButton.children[0].setAttribute("href", "home.html")
            }
        }
    }
}

