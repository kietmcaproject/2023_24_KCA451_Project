from django.shortcuts import render
from resumeScanner.models import ResumeScanner
from django.contrib.auth.decorators import login_required
import textwrap
import PIL.Image
import google.generativeai as genai
import markdown
import random


GOOGLE_API_KEY='AIzaSyCx-H6DtXAGC-glV5mBhbC5HjvRMtmeXDY'


def to_markdown(text):
  text = text.replace('•', '  *')
  return markdown.markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

genai.configure(api_key=GOOGLE_API_KEY)
def resumeAnalysis(resume_img):
    msg_text = "This is my resume analys my resume and provide me the feedback and also tell me my resume is suited for which technical job profile, if provide image is not a resume image than provide feedback 'unreadable file' "
    img = PIL.Image.open(resume_img)
    #defining model
    model = genai.GenerativeModel('gemini-pro-vision')
    response = model.generate_content([msg_text, img], stream=True)
    response.resolve()
    return response.text

@login_required(login_url="/login/")
def scanResume(request):
    resume_score = random.randint(5, 9)
    if request.method == 'POST':
        resume_file = request.FILES.get('resume_file')
        feedback = resumeAnalysis(resume_file)  # Assuming resumeAnalysis is defined elsewhere
        # feedback = "<h1> all good feedback </h1>"
        instance = ResumeScanner.objects.create(resume_file=resume_file, resume_feedback=feedback)
        data = ResumeScanner.objects.filter(pk=instance.pk)  # Filter based on the primary key
        
        if data.exists():  # Check if data contains any instances
            resume_instance = data.first() 
            resume_file_from_data = resume_instance.resume_file
        
        if "not a resume" in feedback or "sorry" in feedback:
            resume_score = 0
       
        return render(request, "resumeAnalysis.html", {
            "resume_score": resume_score, 
            "resume_feedback": feedback,
            "encoded_resume_file_name": resume_file_from_data
        })
    return render(request, "resumeAnalysis.html")




