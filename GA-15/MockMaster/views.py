from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .helper import OTPverification 
from . import decoder
import random
# from django.contrib.auth.decorators import login_required

# home-page
def home_page(request):   
    return render(request, "index.html")

# register-page
def user_register(request):
    generated_otp = request.GET.get('xyz')
    decoded_otp = decoder.decode_msg(str(generated_otp))
    if request.method == 'POST':
        userName = request.POST['user_name']
        userEmail = request.POST['email']
        otp = request.POST['otp']
        password1 = request.POST['pass']
        
        if str(otp) == str(decoded_otp):
            try:
                user = User.objects.filter(username=userEmail)
                if user.exists():
                    messages.info(request, "User name already exists")
                    return redirect('/register/')
                
                user = User.objects.create_user(
                    first_name = userName, 
                    username = userEmail, 
                    password = password1
                )
                user.save()
                # messages.info(request, "Account created successfully")
                login(request, user)
                return redirect('/')
            except:
                error_msg = "Somthing went wrong try again"
                return render(request,'register.html', {'error': error_msg})

        else:
            return render(request,'register.html', {'error': 'Invalid OTP'})

    return render(request, "register.html")

# login-page
def user_login(request):
    if request.method == 'POST':
        userEmail = request.POST.get('user_email')
        password = request.POST.get('user_pass') 

        if not User.objects.filter(username=userEmail).exists():
            messages.info(request, 'Invalid username or password')
            return redirect('/login/')
        user = authenticate(username = userEmail, password = password)

        if user is None:
            messages.info(request, 'Invalid username or password')
            return redirect('/login/')
        else:
            login(request, user)
            return redirect('/')
        
    return render(request, 'login.html')

# logout page
def user_logout(request):
    logout(request)
    return redirect('/')


def about_us(request):
    return render(request, 'about.html')

def verfiacation(request):
    otp = random.randint(100000, 999999)
    if request.method == "POST":
        phone = request.POST['phone']
        phone = "+ 91 " + phone
        try:
            obj = OTPverification(phone, otp)
            obj.send_otp_on_phone()
        except Exception as e:
            return render(request, 'verification.html', {'error': e})
        
        encoded_otp = decoder.encode_msg(otp)
        return redirect(f"/register/?xyz={encoded_otp}")
    return render(request, 'verification.html')



