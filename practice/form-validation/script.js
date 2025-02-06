const userName = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const submit = document.getElementById('submit')

// Prevent form from submitting with errors
form.addEventListener('submit', (e) => {
    let messages = []

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }

    else {
        e.preventDefault();
        submit.innerText = 'If this were a real page, it would login'
    }
    
})