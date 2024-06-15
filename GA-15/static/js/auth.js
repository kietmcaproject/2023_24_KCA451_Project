document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(event){
    
        const pass = document.getElementById('pass').value;
        const cnf_pass = document.getElementById('cnf_pass').value;
        const otp = document.getElementById('otp').value;
        const error_msg = document.getElementById('error_msg');
        const checkbox = document.getElementById('checkbox');
        
        const list = [];

        if(otp.length != 6){
            list.push("OTP must be 6 digits")
        }
        if(pass.length < 8){
            list.push("Password must be at least 8 characters");
        }
        if(cnf_pass.length < 8){
            list.push("Confirm password must be at least 8 characters");
        }
        if(pass !== cnf_pass){
            list.push("Password do not match"); 
        }
        if(!checkbox.checked){
            list.push("Check terms and conditons")
        }

        if(list.length > 0){
            event.preventDefault();
            error_msg.innerText = list.join(", ")
        }
    });
});