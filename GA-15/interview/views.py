from django.shortcuts import render, redirect
from django.http import JsonResponse
from interview.models import *
from django.contrib.auth.decorators import login_required
import textwrap
import google.generativeai as genai
import markdown


GOOGLE_API_KEY="AIzaSyBlsb6vf2Mq3daTwhcjSGr34gq479TjiTw"
genai.configure(api_key=GOOGLE_API_KEY)


def to_markdown(text):
  text = text.replace('•', '  *')
  return markdown.markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])

def generate_questions(request, field_choice):
    questions = Interview_questions.objects.filter(question_type=field_choice)
    return questions



def generate_questions(message):
    response = chat.send_message(message)
    response.resolve()
    # print(chat.last.text)
    # response = to_markdown(response.text)
    return response.text

@login_required(login_url="/login/")
def interview_page(request):
    num_of_quetions = 3
    response = ""
    field = "xyz"
    # field_choice1 = Interview.objects.filter(pk=instance.pk)
    field_choice = request.GET.get('field_choice')
    if field_choice != None:
        field = field_choice
    print(f"the field choice is {field}")
    if request.method == 'POST':           
        print("line 1")
        # getting the message from the form
        message = request.POST.get('message')
        print("line 2")
        print(message)
        # data = Interview_questions.objects.filter()
        # check if the message is start or not (Generating first quetion)
        print("line 3")
        
        message = f"{message}, in reference of python"
        print(f"the field choice is {field}")
        print(f"**********{message}")
        response = generate_questions(message)
            
        return JsonResponse({'message': message, 'response': response})
    return render(request, "interview.html", {'field_choice': field_choice})






from django.shortcuts import render
@login_required(login_url="/login/")
def interview_type(request):
    # print("line 1")
    if request.method == 'POST':
        # print("line 2")
        field_choice = request.POST.get('field_choice')
        # Get the selected field from the form
        # Get the uploaded resume file
        resume_file = request.FILES.get('resume_file')
        
        instance = Interview.objects.create(field_choice=field_choice, resume_file= resume_file)
        field_choice1 = Interview.objects.filter(pk=instance.pk)

        return redirect(f"/interview/?field_choice={field_choice}")
        # return render(request, "choices.html", {'field_choice': field_choice, 'resume_file': resume_file})
    else:
        # print("line 5")
        # If the request method is GET, render the form page
        return render(request, "choices.html")



