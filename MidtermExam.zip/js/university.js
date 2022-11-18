"use strict";

window.onload=()=>{
   // const registrationForm= document.forms[0];

   const registrationForm= document.getElementsByName("form");


    registrationForm[0].onsubmit=(event)=>{
        event.preventDefault();

        const txtFirstName= document.getElementById("txtFirstName");
        const txtMiddleName= document.getElementById("txtMiddleName");
        const txtLastName= document.getElementById("txtLastName");
        const address= document.getElementById("address");
        const personalBio= document.getElementById("personalBio");
        const txtCourse= document.getElementById("txtCourse");
        const txtIdNumber = document.getElementById("txtIdNumber");

        const rdoPostDoctoral= registrationForm.elements["rdoPostDoctoral"];

        const radioButtons= document.getElementById("rdoPostDoctoral");

        alert(`
        Level Of Study: ${rdoPostDoctoral.value}
        Application Full Name: ${txtFirstName.value} ${txtMiddleName} ${txtLastName}
        Address: ${address.value}
        Applicant Id Number: ${txtIdNumber.value}
        Course: ${txtCourse.value}

        `

        )



    }
}