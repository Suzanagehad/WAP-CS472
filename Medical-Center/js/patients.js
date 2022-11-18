// pratients 

"use strict";

//this is to just alert only 
window.onload=()=>{
    const pratientForm= document.forms[0];
    pratientForm.onsubmit=(event)=>{
        event.preventDefault();

    const rdoOutPatient= pratientForm.elements["rdoOutPatient"];
    const txtId= document.getElementById("txtId");
    const txtFirstName= document.getElementById("txtFirstName");
    const txtMiddleName= document.getElementById("txtMiddleName");
    const txtLastName= document.getElementById("txtLastName");
    const txtDateBirth= document.getElementById("txtDateBirth");
    const textDepartment= document.getElementById("textDepartment");
    const radioButtons= document.getElementsByName("rdoOutPatient");

        alert(`
     Patient Id: ${txtId.value}
     First Name: ${txtFirstName.value}
     Middle Initial: ${txtMiddleName.value}
     Last Name: ${txtLastName.value}
     Date Of Birth: ${txtDateBirth.value}
     Department: ${textDepartment.value}
     Is Patient Out: ${rdoOutPatient.value}`
     );
    }
}


//this is if i want to print it in the bottom page of the webpage 
// window.onload=()=>{
//     const pratientForm= document.forms[0];
//     pratientForm.onsubmit=(event)=>{
//         event.preventDefault();

//     const rdoOutPatient= pratientForm.elements["rdoOutPatient"];
//     const txtId= document.getElementById("txtId");
//     const txtFirstName= document.getElementById("txtFirstName");
//     const txtMiddleName= document.getElementById("txtMiddleName");
//     const txtLastName= document.getElementById("txtLastName");
//     const txtDateBirth= document.getElementById("txtDateBirth");
//     const textDepartment= document.getElementById("textDepartment");
//     const radioButtons= document.getElementsByName("rdoOutPatient");

//     const message= document.getElementById("message2");

//         message.innerHTML=`
//      Patient Id: ${txtId.value}
//      First Name: ${txtFirstName.value}
//      Middle Initial: ${txtMiddleName.value}
//      Last Name: ${txtLastName.value}
//      Date Of Birth: ${txtDateBirth.value}
//      Department: ${textDepartment.value}
//      Is Patient Out: ${rdoOutPatient.value}`
//      ;
//     }
// }




