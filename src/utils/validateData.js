export const validateEmail = (email) => {
    if(email.length===0)return 'email cannot be empty'
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
        email
    );
    if(!isEmailValid) return 'Please enter a valid email'
    else return null
}

export const validatePassword = (password) => {
    if(password.length<8) return 'Password must contain at least 8 character'
    // if(!(/^(?=.*[a-z]).*$/).test(password)) return 'Password must contain a Lowercase character'
    // if(!(/^(?=.*[A-Z]).*$/).test(password)) return 'Password must contain a Uppercase character'
    // if(!(/^(?=.*[0-9]).*$/).test(password)) return 'Password must contain a Number'
    // if( !(/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/).test(password)) return 'Password must contain a Special Character'
    else return null
}
