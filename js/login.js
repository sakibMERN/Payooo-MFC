//form submit reloading the page.

//Step-1: Set event handler
document.getElementById("button-login").addEventListener("click", function(event){

    //Step-2: Stop refreshing current page
    // e.preventDefault(); or
    event.preventDefault(); //it use for stop refreshing the current page.
    console.log("Login Button Clicked");

    //Step-3: Get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    if(phoneNumber === "01990030303" && pinNumber === "1234"){
        window.location.href = "./home.html";
    }
    else{
        alert("Incorrect phone or pin number")
    }


    console.log(phoneNumber.value);
})