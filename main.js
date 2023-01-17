function userVerification() {
    let userName = prompt('What is your name?');

    while (userName === null || userName === "*" || !isNaN(userName)) {
        userName = prompt('What is your name?', userName);
    }
let userAge = prompt('How old are you?');

while (userAge === null || userAge === "*" || isNaN(userAge)) {
    userAge = prompt('How old are you?', userAge);
}

if (userAge < 18) {
    alert('You are not allowed to visit this website');
} else if (userAge >= 18 && userAge <= 22) {
    let allow = confirm('Are you sure you want to continue?');
    if (allow === true) {
        alert(`Welcome, ${userName} `);
    } else {
        alert('You are not allowed to visit this website');
    }
} else {
    alert(`Welcome, ${userName}`);
}
    console.log(`name: ${userName}, userAge: ${userAge}`);
}
userVerification();














