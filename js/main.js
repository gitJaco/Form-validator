
//Grab DOM elements

const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

//Function

function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error"
    const Small = formControl.querySelector("small")
    Small.innerText = message
}

function showSuccess(input, message) {
    const formControl = input.parentElement
    formControl.className = "form-control success"
    const small = formControl.querySelector("small")
    small.innerText = message
}

function checkEmail(input) {
    const re = /\S+@\S+\.\S+/;
    if(re.test(input.value.trim())) {
       showSuccess(input, "Success")
    } else {
       showError(input, "Email is not valid")
    }
  }

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkRequired(inputArr) {
   inputArr.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input, "Success")
        }
   })
}

function checkLength(input, min, max) {
     if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
     } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
     } else {
        showSuccess(input, "Success")
     }
}

function checkPaswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, "Passwords do not match")
    }
}
//Listen submit event

form.addEventListener("submit", function(e) {
    e.preventDefault()

    // if(username.value === "") {
    //    showError(username, "Username is required")
    // } else {
    //     showSucces(username, "Success")
    // }

    // if(email.value === "") {
    //     showError(email, "email is required")
    // } else if(!validateEmail(email.value)) {
    //     showError(email, "Email is not valid")
    //  } else {
    //      showSucces(email, "Success")
    //  }

    //  if(password.value === "") {
    //     showError(password, "password is required")
    //  } else {
    //      showSucces(password, "Success")
    //  }

    //  if(password2.value === "") {
    //     showError(password2, "password is required")
    //  } else {
    //      showSucces(password2, "Success")
    //  }
    
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 20)
    checkEmail(email)
    checkPaswordsMatch(password, password2)

    
})
