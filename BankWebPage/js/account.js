const form= document.getElementById("form");

const fullName= document.getElementById("fullName");
const address= document.getElementById("address");
const accNumber= document.getElementById("accNumber");
const typeAcc= document.getElementById("typeAcc");

const radioAccount=form.elements["radioAccount"];
const radioButtons=document.getElementsByName("radioAccount");

form.onsubmit= function(event){
    event.preventDefault()

    alert(`
    Full Name: ${fullName.value}
    Address: ${address.value}
    Account Number: ${accNumber.value}
    Type of Account: ${typeAcc.value}
    Account Ownership Type: ${radioAccount.value}

        `
    )

    fullName.value="";
    address.value="";
    accNumber.value="";
    typeAcc.value="";
    radioAccount.value="";
}