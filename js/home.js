//add money to the account

//Step-1 : add an event handler to the add money button inside the form
document.getElementById("btn-add-money").addEventListener("click", function(e){
    e.preventDefault(); //for prevent reload after form submit.

    // Step-2: get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;
    
    //get the pin
    const pinNumberInput = document.getElementById("input-pin-number").value;
    
    //Step-3: Verify pin number
    if(pinNumberInput === "1234" && addMoneyInput !== ""){
        //Step-4: get the current balance
        const balance = document.getElementById("account-balance").innerText;
        // console.log(typeof balance); 

        //Step-5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        //Step-6: update the balance in the UI/DOM

        document.getElementById("account-balance").innerText = newBalance;
        
    }
    else{
        alert("Operation failed! Please try again.")
    }
})