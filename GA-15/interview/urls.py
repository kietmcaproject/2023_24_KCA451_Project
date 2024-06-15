from django.urls import path
from interview import views

urlpatterns = [
    path('interview/', views.interview_page),
    path('interview-type/', views.interview_type),
]

