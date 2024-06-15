from django.urls import path
from resumeScanner import views

urlpatterns = [
    path('resume-scanner/', views.scanResume),
    # path('resume-analysis/', views.resumeAnalysis),
]
 