function onChange() {
    let password = document.querySelector('input[name=password');
    let confirm = document.querySelector('input[name=confirm');
    (confirm.value === password.value)
    ? confirm.setCustomValidity('') : confirm.setCustomValidity('Password does not match.');
}