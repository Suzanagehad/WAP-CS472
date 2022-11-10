
window.onload= function(){
    const loginForm= document.getElementById("loginForm");
    loginForm.onsubmit= function(event){
        event.preventDefault();
        const emailDoc= document.getElementById("email");
        const passwordDoc= document.getElementById("password");
        const urlDoc= document.getElementById("url");

        const email= emailDoc.value;
        const password= passwordDoc.value;
        const url= urlDoc.value;

        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log(`URL: ${url}`);

        emailDoc.value="";
        passwordDoc.value="";
        urlDoc.value="";        
    }
};

