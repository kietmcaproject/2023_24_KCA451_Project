document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    
    form.addEventListener('submit', function(event){
    
        const user_email = document.getElementById('email').value;
        const user_pass = document.getElementById('pass').value;
        
        const list = [];

        if(user_pass.length < 8){
            list.push("Password must be at least 8 characters");
        }

        if(list.length > 0){
            event.preventDefault();
            error_msg.innerText = list.join(", ")
        }
    });
});


