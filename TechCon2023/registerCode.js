/* Function that checks for form validation */
function checkValidForm(){
    var ageInput = document.getElementById("age") /* Assigns teh value held in the element ID "age" to ageInput*/
    var age = parseInt(ageInput.value) /* Converts that value into a INT and stores it in age*/

    /* If statement */
    if(age < 18){
        window.alert("You are too young!");
    }
}


/* Function/s that toggle the popups 1, 2, 3 on and off */
function togglePopup1(){
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3(){
    document.getElementById("popup-3").classList.toggle("active");
}

