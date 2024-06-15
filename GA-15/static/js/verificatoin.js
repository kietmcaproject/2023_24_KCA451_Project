document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(event){
        const phone = document.getElementById('phone').value;
        const error_msg = document.getElementById('error_msg');
        
        const list = [];

        if(phone.length < 10){
            list.push("Invalid phone number, please enter 10 digit phone number")
        }
        if(list.length > 0){
            event.preventDefault();
            error_msg.innerText = list.join(", ")
        }
    });
});