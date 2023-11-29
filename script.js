let password = document.getElementById('password');
let mail = document.getElementById('mail');
function type_changer() {
    if(password.type == "password") {
        password.type = "text";
    
    document.querySelector(".fa-solid").classList.remove("fa-eye");
    document.querySelector(".fa-solid").classList.add("fa-eye-slash");

    } else {
        password.type = "password";
    
        document.querySelector(".fa-solid").classList.remove("fa-eye-slash");
        document.querySelector(".fa-solid").classList.add("fa-eye");
    }

}

function check_count(){
    if(password.value.length<8){
        alert("password is less than 8 characters")
    }
    
}