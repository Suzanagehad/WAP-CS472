"use strict";

// const buildingNo= document.getElementById("buildingNo");
// const floorNo = document.getElementById("floorNo");
// const apartmentNo= document.getElementById("apartmentNo");
// const title = document.getElementById("title");
// const fullNames= document.getElementById("fullNames");
// const phoneNo = document.getElementById("phoneNo");
// const email= document.getElementById("email");
// const driversLicenceNo= document.getElementById("driversLicenceNo");

// const form= document.getElementsByTagName("form");

// form[0].onsubmit= function(event){
//     event.preventDefault();
//     const message = document.getElementById("message2");

//     alert(`
//     Building Number: ${buildingNo.value}
//     Floor Number: ${floorNo.value}
//     Apartment Number: ${apartmentNo.value}
//     Title: ${title.value}
//     Full Names: ${fullNames.value}
//     Phone Number: ${phoneNo.value}
//     Email: ${email.value}
//     Driver Licence Number: ${driversLicenceNo.value}

//     `

//     )
// }


//TO open the console ctrl+shift+i

window.onload= function(){
    const form= document.getElementById("form");

    form.addEventListener("submit", (event)=>{
        event.preventDefault();

const buildingNo= document.getElementById("buildingNo");
const floorNo = document.getElementById("floorNo");
const apartmentNo= document.getElementById("apartmentNo");
const title = document.getElementById("title");
const fullNames= document.getElementById("fullNames");
const phoneNo = document.getElementById("phoneNo");
const email= document.getElementById("email");
const driversLicenceNo= document.getElementById("driversLicenceNo");

const strBuildingNo= buildingNo.value;
const strFloorNo= floorNo.value;
const strApartmentNo= apartmentNo.value;
const strTitleNo= title.value;
const strFullName= fullNames.value;
const strPhoneNo= phoneNo.value;
const strEmailNo= email.value;
const strLicenseNo= driversLicenceNo.value;

const output=`
Building Number: ${strBuildingNo}
    Floor Number: ${strFloorNo}
    Apartment Number: ${strApartmentNo}
    Title: ${strTitleNo}
    Full Names: ${strFullName}
    Phone Number: ${strPhoneNo}
    Email: ${strEmailNo}
    Driver Licence Number: ${strLicenseNo}

`;

alert(output);

//clear all the elements 
buildingNo.value="";
floorNo.value="";
apartmentNo.value="";
title.value="";
fullNames.value="";
phoneNo.value="";
email.value="";
driversLicenceNo.value="";


   

    });
}

