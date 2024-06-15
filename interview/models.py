from django.db import models

# Create your models here.
class Interview(models.Model):
    FIELD_CHOICES = [
        ('MERN', 'MERN'),
        ('Java', 'Java'),
        ('Python', 'Python'),
        ('Full Stack', 'Full Stack'),
    ]   
    
    field_choice = models.CharField(max_length=50, choices=FIELD_CHOICES)
    resume_file = models.FileField(upload_to='resumes/')
    chat = models.TextField(blank= True, null=True)
    

class Interview_questions(models.Model):
    q_id = models.AutoField(primary_key=True)
    question = models.TextField(null=True, blank=True)
    question_type = models.CharField(max_length=200, null=True, blank=True)

class Tech_field(models.Model):
    field = models.CharField(max_length=100, null=True, blank=True)

# class MERN_Questions(models.Model):
#     q_id = models.AutoField(primary_key=True)
#     question = models.CharField(max_length=200)
 
# class Java_Questions(models.Model):
#     q_id = models.AutoField(primary_key=True)
#     question = models.CharField(max_length=200)
 
# class Python_Questions(models.Model):
#     q_id = models.AutoField(primary_key=True)
#     question = models.CharField(max_length=200)
 
# class Full_Stack_Questions(models.Model):
#     q_id = models.AutoField(primary_key=True)
#     question = models.CharField(max_length=200)
 