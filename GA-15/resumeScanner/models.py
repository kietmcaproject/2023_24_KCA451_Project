from django.db import models

# Create your models here.

class ResumeScanner(models.Model):
    resume_file = models.FileField(upload_to='resumes/')
    resume_feedback = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)