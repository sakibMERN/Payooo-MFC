document.getElementById("btn-cash-out").addEventListener("click", function(event){
    event.preventDefault();

    //collect input value
    const withdrawalInput = document.getElementById("input-cashout").value;
    const withdrawalPin = document.getElementById("input-cash-out-pin").value;
    //validate pin
    //wrong way to verify
    if(withdrawalInput !== "" && withdrawalPin === "1234"){
        //Cash out operation
        const cashOut = parseFloat(withdrawalInput);
        const currentBalance = document.getElementById("account-balance").innerText;
        
        //reduce the balance
        const updateBalance = currentBalance - cashOut;

        document.getElementById("account-balance").innerText = updateBalance;
    }
    else{
        alert("Operation failed! Try Again.");
    }
})