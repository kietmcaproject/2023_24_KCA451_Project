from django.shortcuts import render, redirect
from .models import Contact_form
from django.contrib.auth.decorators import login_required


@login_required(login_url="/login/")
def contact_view(request):
    contact = Contact_form()
    if request.method == 'POST':
        name = request.POST.get('txtName')
        email = request.POST.get('txtEmail')
        phone = request.POST.get('txtPhone')
        message = request.POST.get('txtMsg')
        contact.name = name
        contact.email = email
        contact.phone = phone
        contact.message = message
        contact.save()
        return redirect("/")
    return render(request, "contact.html")
