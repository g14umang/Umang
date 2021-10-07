function validateForm(emial) {
    const firstName = document.getElementById("firstName").value;
    const firstNameError = document.getElementById("firstNameError");
    const lastName = document.getElementById("lastName").value;
    const lastNameError = document.getElementById("lastNameError");
    const email=document.getElementById("email")
    const emailError=document.getElementById("emailError")
    const mobile=document.getElementById("mobile")


// FirstName Validation
    if (firstName == undefined || firstName == null || firstName == "") {
        firstNameError.innerHTML = "First Name must be provided";
        return false;
    }
    else if (firstName.length <= 1) {
        firstNameError.innerHTML = "Minimum 2 character are allowed  ";
    }

//Last Name Validation
    if(lastName == undefined || lastName == null || lastName == ""){
        lastNameError.innerHTML = "last Name must be provided";
        return false;
    }
    else if (lastName.length <= 1) {
        lastNameError.innerHTML = "Minimum 2 character are allowed  ";
    } 

    var mailFormat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(mailFormat))
    {
        alert("You have entered correct email address");
    }
    else
    {
        alert("Invalid Email Address");
    }  

    var mobileFormat=/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(mobile.value.match(mobileFormat))
    {
        alert("valid phone number!")
    }
    else
    {
    alert(" invalid phone number");
    
    }
    }